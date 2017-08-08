import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Topic } from "../custom-types";

import { TopicService } from "./topic.service";

@Component({
    selector: "topic-book",
    templateUrl: "./new-topic.component.html", 
    styleUrls: ["./new-topic.component.css"]
})
export class NewTopicComponent implements OnInit {
    message = {
        show: false, 
        _id: null
    };

    constructor(
        private router: Router,
        private service: TopicService
    ) {}

    topic: Topic = new Topic();
    topicForm: FormGroup;

    defImgUrl: string = 'assets/images/book-avatar.jpg';
    
    optional = {
        year: false, 
        genre: false
    }
    
    ngOnInit(): void {
        this.topicForm = new FormGroup({
            'title': new FormControl(this.topic.title, [
                Validators.minLength(2), 
                Validators.maxLength(40),
                Validators.pattern("[\\w\\s\'\".,]+")
            ]), 
            'author': new FormControl(this.topic.author, [
                Validators.minLength(2), 
                Validators.maxLength(25),
                Validators.pattern("[\\w\\s\'.]+")
            ]), 
            'description': new FormControl(this.topic.description, [
                Validators.minLength(10), 
                Validators.maxLength(500)
            ]), 
            'imgUrl': new FormControl(this.topic.imgUrl),
            'year': new FormControl(this.topic.year), 
            'genre': new FormControl(this.topic.genre) 
        });
    }

    onSubmit(form, formObject) {
        this.service.insertTopic(this.filterForm(form.value))
            .subscribe(res => { 
                if (res.navigate)
                    this.router.navigate(['/topic', res._id]);
                else { 
                    formObject.resetForm();
                    this.message._id = res._id;
                    this.message.show = true;
                }
            });
    }

    optionalInput(targetName) {
        this.optional[targetName] = true;
    }
    
    // Remove empty/null props from form object
    filterForm(topic: Topic): Topic {
        let filtered: Topic = new Topic(); 

        for (let i = 0; i < Object.keys(topic).length; i++) {
	        let key = Object.keys(topic)[i]; 
	        if (topic[key])
                filtered[key] = topic[key]; 
        }

        return filtered;
    }
}
