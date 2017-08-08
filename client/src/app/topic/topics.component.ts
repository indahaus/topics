import { Component } from "@angular/core";
import { Topic } from "../custom-types";
import { TopicService } from "./topic.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: "topics", 
    templateUrl: "./topics.component.html",
    styleUrls: ["./topics.component.css"]
})
export class TopicsComponent{
    topics: Topic[];
    newTopic: Topic = new Topic();
    
    constructor(
        private router: Router,
        private topicService: TopicService, 
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.queryParamMap
            .switchMap((params: ParamMap) => 
                this.topicService
                    .getTopics(params.get("category")))
            .subscribe(r => this.topics = r);
    }
}
