import { Component }            from "@angular/core";
import { ActivatedRoute, 
         ParamMap }             from "@angular/router"; 
import { Location }             from "@angular/common";

import { Reply, 
         Session }              from "../custom-types";

import { DiscussionService }    from "./discussion.service";
import { SessionService }       from "../session/session.service";

import { Observable }           from "rxjs/Observable";

@Component({
    selector: "comments",
    templateUrl: "./discussion.component.html",
    styleUrls: ["./discussion.component.css"]
})
export class DiscussionComponent {
    title: string = "Discussion on ..."
    session: Observable<Session>;

    id: string; 
    bookId: string;
    
    replies: Reply[];
    newReply: Reply = new Reply(); 
    currentPage: number = 1;
    replyCount: number; 

    constructor(
        private route: ActivatedRoute, 
        private location: Location,
        private service: DiscussionService,
        private sessionService: SessionService
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => 
                this.service.getReplies(params.get('id'), null))
                .subscribe(res => { 
                    this.replies = res;
            });

        this.route.paramMap
            .switchMap((params: ParamMap) => 
                this.service.countReplies(params.get('id')))
                .subscribe(res => { 
                    this.replyCount = parseInt(res);
            });

        this.session = this.sessionService.checkSession(5);
    }

    showMore() {
        this.currentPage++;
        this.route.paramMap
            .switchMap((params: ParamMap) => 
                this.service.getReplies(params.get('id'), { 
                    page: this.currentPage, 
                    last: this.replies[this.replies.length - 1].datetime
                }))
                .subscribe(res => { 
                    for (let i = 0; i < res.length; i++)
                        this.replies.push(res[i]);
                });
    }

    postReply() {
        this.route.paramMap 
            .switchMap((params: ParamMap) => 
                this.service.reply(params.get('id'), this.newReply))
            .subscribe(res => {
                this.newReply.datetime = res.datetime;
                this.replyCount++; 
                this.newReply = new Reply();
            });
    }
}
