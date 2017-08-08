import { Component, 
         Input, 
         OnInit }               from "@angular/core";

import { TopicService }         from "../topic/topic.service"; 

import { Topic,
         Session }              from "../custom-types";

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: "search",
    templateUrl: "./search.component.html", 
    styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
    @Input() present: boolean = false;
    @Input() session: Session;
    found: Topic[]; 

    private searchTerms = new Subject<string>();
    
    search(term: string): void {
        this.searchTerms.next(term);
    }

    constructor(
        private topicService: TopicService
    ) {}

    ngOnInit(): void {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term =>  
                term ? this.topicService.searchTopic(term) 
                    : Observable.of<Topic[]>([]))
            .subscribe(topics =>  this.found = topics);
    }
}
