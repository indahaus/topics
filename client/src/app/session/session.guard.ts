import { Injectable }           from "@angular/core";
import { 
         Router, 
         CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from "@angular/router";

import { SessionService }       from "./session.service";

import { Observable }           from "rxjs/Observable";

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(
        private user: SessionService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.user.checkSession(5)
                .map(session => {
                    let path = route.url.map(i => i.path);
                    return this.activateHelper(path.join("/"), session);
                });
    }

    activateHelper(path, session): boolean {
        if (session) 
            switch(path) {
                case "login":
                    this.router.navigate([""]);
                    return false;
                case "topics/create":
                    return true; 
                case "topics/pending":
                    if (session.priority < 3)
                        return true;
                    else 
                        this.router.navigate([""]);
                        return false;
                default: 
                    this.router.navigate([""]);
                    return false; 
            }
        
        else 
            if (path === "login")
                return true; 
            else {
                this.router.navigate([""]);
                return false;
            } 
    }        
}
