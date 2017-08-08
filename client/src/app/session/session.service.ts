import { Injectable } from "@angular/core";
import { Http }  from "@angular/http";

// Observables
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Session } from "../custom-types";

@Injectable()
export class SessionService {
    // TODO: Error handling
    
    private sessionInfo: Session;

    // String source
    private loginConfirmedSource = new Subject<Session>();
    
    // Observable stream
    loginConfirmed$ = this.loginConfirmedSource.asObservable();

    constructor(private http: Http) {}

    login(creds): Observable<any>  {
        return this.http.post(`/api/session/login`, creds)
                .map(res => res.json());
    }

    checkSession(priority: number = 5): Observable<Session> {
        return this.http.get(`/api/session/check?priority=${priority}`)
                .map(res => res.json().session);
    }

    logout(): Observable<any> {
        return this.http.post(`/api/session/logout`, {})
                .map(res => res.json());
    }

    verifySession(token): Observable<any> {
        return this.http.post('/api/session/verify-token', { token })
                .map(res => res.json());
    }

    setSession(data): Promise<Session> {
        this.sessionInfo = data; 
        return Promise.resolve(this.sessionInfo);
    }

    getSession(): Promise<Session> {
        return Promise.resolve(this.sessionInfo);
    }
    
    confirmLogin(session: Session) {
        this.loginConfirmedSource.next(session);
        this.loginConfirmedSource.complete();
    }
}
