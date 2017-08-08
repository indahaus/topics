import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TopicsComponent } from "./topic/topics.component";
import { TopicSingleComponent } from "./topic//topic-single.component";
import { NewTopicComponent } from "./topic/new-topic.component";
import { PendingComponent } from "./topic/pending.component";
import { DiscussionComponent } from "./discussion/discussion.component";
import { DashboardComponent } from "./shared/dashboard.component";
import { LoginComponent } from "./session/login.component";

import { SessionGuard } from "./session/session.guard";

const appRoutes: Routes = [ 
    {
        path: 'topics', 
        component: TopicsComponent 
    },
    {
        path: 'topic/:id',
        component: TopicSingleComponent
    },
    {
        path: 'topic/:id/discussion',
        component: DiscussionComponent
    },
    {
        path: 'topics/create', 
        component: NewTopicComponent,
        canActivate: [SessionGuard]
    },
    {
        path: "topics/pending", 
        component: PendingComponent,
        canActivate: [SessionGuard]
    },
    {
        path: "dashboard", 
        component: DashboardComponent
    },
    {
        path: "login", 
        component: LoginComponent,
        canActivate: [SessionGuard]
    },
    {
        path: '',
        redirectTo: '/dashboard', 
        pathMatch: "full"
    } 
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [SessionGuard]
})
export class AppRoutingModule { }
