import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule }  from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./shared/search.component";

import { TopicsComponent } from "./topic/topics.component";
import { TopicSingleComponent } from "./topic/topic-single.component";
import { NewTopicComponent } from "./topic/new-topic.component";
import { PendingComponent } from "./topic/pending.component";

import { DiscussionComponent } from "./discussion/discussion.component";

import { DashboardComponent } from "./shared/dashboard.component";

import { LoginComponent } from "./session/login.component";

import { TopicService } from "./topic/topic.service";
import { DiscussionService } from "./discussion/discussion.service";
import { SessionService } from "./session/session.service";
import { SessionGuard } from "./session/session.guard";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        TopicsComponent,
        TopicSingleComponent,
        NewTopicComponent,
        PendingComponent,
        DiscussionComponent, 
        DashboardComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        TopicService,
        DiscussionService,
        SessionService,
        SessionGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
