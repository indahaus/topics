import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { SessionService } from "./session/session.service";
import { Session } from "./custom-types";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    session: Session; 
    hideLogin: boolean = true;
    searchOn: boolean = true;

    constructor( 
        private location: Location,
        private router: Router,
        private sessionService: SessionService) {
            sessionService.loginConfirmed$
                .subscribe({ 
                    next: (session) =>  { 
                        this.hideLogin = true;
                        this.session = session;
                    },
                    complete: () => { console.log("Login completed") }
                });
    }

    ngOnInit() {
        if (localStorage.getItem("kento"))
            this.sessionService
                .verifySession(localStorage.getItem("kento"))
                .subscribe(res => {
                    if (res.valid) 
                        this.sessionService.setSession(res.user)
                            .then(session => {
                                this.hideLogin = true;
                                this.session = session;
                            })
                    else { 
                        localStorage.removeItem("kento");
                        this.hideLogin = false;
                    }
                });
        else 
            this.hideLogin = false;
    }
    
    goBack() {
        this.location.back();
    }
    
    toggleSearch() {
        this.searchOn = !this.searchOn;
    }

    logoutProceed() {
        this.sessionService
            .logout()
            .subscribe(res => { 
                if (res.ok) {
                    this.session = null; 
                    this.hideLogin = false;
                    localStorage.removeItem("kento");
                    location.reload();
                }
            });
    }
}
