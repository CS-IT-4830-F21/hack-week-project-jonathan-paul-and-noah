import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from '../../services/post-service.service';

import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  userModel: AuthService;
  postModel: PostServiceService;
  renderer: Renderer2;
  router: Router;

  highlighted: boolean = false;

  posts: Post[] | null;

  sampleCode = "print(\"Here is some sample code.\")\nfor i in range(5):\n\tprint(\"Hello.\")"
  sampleImage = "../../../assets/pic.JPG"
  sampleUsername = "paulhemingway123"
  sampleTitle = "Print statements and For loops!"
  sampleDescription = "In this code, I first print 'Here is some sample code.' Then, I use a for loop to print 'Hello.' 5 times."
  sampleTime = "44m"

  constructor( router: Router, 
    builder: FormBuilder, 
    renderer: Renderer2, 
    userModel: AuthService, 
    postModel: PostServiceService,
    private highlightService: HighlightService) {
      this.userModel = userModel;
      this.postModel = postModel;
      this.renderer = renderer;
      this.router = router;
      this.posts = this.postModel.posts; 
  }

  ngOnInit(): void {
    //this.postModel.getPosts();
    console.log(this.posts);
  }

  ngAfterViewChecked() {
    setTimeout(() =>{
      if (!this.highlighted){
        this.highlightService.highlightAll();
        this.highlighted = true;
      }
    }, 50)
    
  }

  

}
