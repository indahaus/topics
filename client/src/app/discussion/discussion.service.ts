import { Injectable }        from "@angular/core";
import { Http, 
         RequestOptions, 
         URLSearchParams }   from "@angular/http";

import { Observable }        from "rxjs/Observable";

@Injectable()
export class DiscussionService {

    constructor(private http: Http) {}

    reply(id, data): Observable<any> {
        return this.http
            .post(`/api/topics/${id}/discussion`, data)
            .map(res => res.json());
    }

    getReplies(id, data): Observable<any> {
        return this.http
            .get(`/api/topics/${id}/discussion`, 
                this.optionParams(data))
            .map(res => res.json());
    }  

    countReplies(id): Observable<any> {
        return this.http
            .get(`/api/topics/${id}/count`)
            .map(res => res.json().count);
    }

    // I have similar one in topics.service 
    // It's even better if I extract it somewhere
    optionParams(options): RequestOptions {
        let params = new URLSearchParams();

        if (options) {
            params.set("page", options.page);
            params.set("last", options.last);
        }

        return new RequestOptions({
            search: params 
        });
    }
}
