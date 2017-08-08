import { Component, OnInit } from "@angular/core"; 
import { TopicService } from "./topic.service";
import { Topic } from "../custom-types";
import { SessionService } from "../session/session.service";

@Component({
    templateUrl: "./pending.component.html", 
    styleUrls: ["./pending.component.css"]
})
export class PendingComponent implements OnInit {
    topics: Topic[];
    constructor(
        private service: TopicService,
        private sessionService: SessionService 
    ) {}

    ngOnInit() {
        this.service.getPending()
            .subscribe(res => this.topics = res);
    }

    answer(id, value) {
        this.service.pending(id, value)
            .subscribe(() => {
                let i = this.topics.findIndex(o => o._id === id);
                this.topics.splice(i, 1);
            });
    }
}
