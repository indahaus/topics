import { Component }        from "@angular/core"; 
import { ActivatedRoute, 
         ParamMap,
         Router }           from "@angular/router";
import { Location }         from "@angular/common";

import { TopicService }     from "./topic.service";
import { SessionService }   from "../session/session.service";

import { Topic, 
         Session }          from "../custom-types";

import { Observable }       from "rxjs/Observable";``
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: "./topic-single.component.html",
    styleUrls: ["./topic-single.component.css"]
})
export class TopicSingleComponent {
    topic: Topic; 
    message: string;
    session: Observable<Session>; 
    hideUpdate = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router, 
        private service: TopicService,
        private sessionService: SessionService,
        private location: Location
    ){}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => 
                this.service.getOneTopic(params.get('id')))
                .subscribe(res => { 
                    this.topic = res
                }, err => {
                    if (err.message == 401)
                        this.router.navigate([""]);
                });

        this.session = this.sessionService.checkSession(2);
    }
    
    update() {
        this.service.updateTopic(this.topic)
            .subscribe(() => this.hideUpdate = true);
    }
    
    remove() {
        this.route.paramMap
            .switchMap((params: ParamMap) => 
                this.service.deleteTopic(params.get("id")))
            .subscribe(r =>  this.location.back())
        // Should check if deletion has succeed before redirect 
    }

    toggleUpdate() {
        this.hideUpdate = !this.hideUpdate;
    }
}