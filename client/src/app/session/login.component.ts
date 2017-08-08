import { Component } from "@angular/core";
import { SessionService } from "./session.service";
import { Router } from "@angular/router";
import { Session, Credentials } from "../custom-types";

@Component({
    selector: "login", 
    templateUrl: "./login.component.html", 
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    message: string;
    creds: Credentials = new Credentials();
    
    constructor( 
        private service: SessionService,
        private router: Router 
    ) {}

    loginSubmit() {
        this.service.login(this.creds)
            .subscribe(res => {
                if (res.user && res.ok) {
                    localStorage.setItem("kento", res.token);
                    this.service.setSession(res.user)
                        .then(session => { 
                            this.service.confirmLogin(session);
                            this.router.navigate([""]);
                        });
                }

                else 
                    this.message = "Invalid credentials."
        });
    }
}
