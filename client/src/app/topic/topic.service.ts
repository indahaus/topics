import { Injectable }        from "@angular/core";
import { Http, 
         Headers, 
         RequestOptions, 
         URLSearchParams }   from "@angular/http";

import { Session, Topic }    from "../custom-types";

import { Observable }        from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/throw';

@Injectable()
export class TopicService { 
    private header = new Headers(
        { "Content-Type": "application/json" }
    );

    constructor (private http: Http ) {}
    
    getTopics(category): Observable<any> {
        let options = this.optionParams("category", category);
        return this.http.get(`/api/topics`, options)
                .map(res => res.json());
    }

    getOneTopic(id): Observable<any> {
        return this.http.get(`/api/topics/${id}`)
                .map(res => res.json())
                .catch((err, caught: Observable<any>) => 
                    Observable.throw(new Error(err.status))
                );
    }
    
    getPending(): Observable<any> {
        return this.http.get("/api/topics/pending")
                .map(res => res.json());
    }

    pending(id, value): Observable<any> {
        return this.http.post("/api/topics/pending", 
            JSON.stringify({ id, value }), {headers: this.header })
            .map((res) => res.json());
    }

    insertTopic(topic): Observable<any> {
        return this.http.post(`/api/topics`, 
            JSON.stringify(topic), { headers: this.header }
        ).map(res => res.json());
        
    }

    updateTopic(topic): Observable<any> {
        return this.http.put(`/api/topics/${topic._id}`, 
            JSON.stringify(topic), { headers: this.header }
        ).map(res => res.json());
    }

    deleteTopic(id): Observable<any> {
        return this.http.delete(`/api/topics/${id}`)
                .map(res => res.json());
    }

    searchTopic(value: string): Observable<Topic[]> {
        let options = this.optionParams("search", value);
        return this.http.get(`/api/topics`, options)
        .map(res => res.json() as Topic[]);
    }

    optionParams(key, value): RequestOptions {
        // Extend to work with arrays if needed
        let params = new URLSearchParams();

        params.set(key, value);

        return new RequestOptions({
            search: params 
        });
    }
}
