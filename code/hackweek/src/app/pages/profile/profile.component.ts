import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HighlightService } from 'src/app/highlight.service';
import { AuthService, User } from 'src/app/services/auth.service';
import { Post, PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../home/home.component.css']
})
export class ProfileComponent implements OnInit {
  userModel: AuthService;
  postModel: PostServiceService;
  renderer: Renderer2;
  router: Router;
  route: ActivatedRoute;
  currentUser: User;
  posts: Post[] = [];
  author: User = new User(0, "", "", "");;
  highlighted: boolean = false;
  highlightService: HighlightService;


  constructor( router: Router, builder: FormBuilder, renderer: Renderer2, route:ActivatedRoute, userModel: AuthService, postModel: PostServiceService, highlightService: HighlightService) {
    this.userModel = userModel;
    this.postModel = postModel;
    this.renderer = renderer;
    this.router = router; 
    this.route = route;
    this.currentUser = this.userModel.currentUser as User;
    this.highlightService = highlightService;
    // this.posts = [];
    // this.author = "";
    // this.route.params.subscribe((params: Params) => { 
    //   this.author = this.userModel.getUserProfileByID(params['id']) as unknown as string;
    //   this.pageTitle = this.author + " Posts";
    // });
    // this.posts = [new Post(1, "console.log('This is a default post.');", "This is a default post.", 1, "JavaScript", "12/2/2021", "Default.js")];
        // this.author = new User(0, "DefaultUser", "default@umsystem.edu", "I am a computer science student at the University of Missorui.");
  }

  ngOnInit(): void {
    if (this.userModel.profile != null){
      this.posts = this.postModel.userPosts;
      this.author = this.userModel.profile as User;
    }
    else {
      this.route.params.subscribe((params: Params) => {
        console.log(params['id']); 
        this.postModel.getUserPosts(params['id']);
        setTimeout(() =>{
          this.posts = this.postModel.userPosts;
          this.author = this.userModel.profile as User;
        }, 500)
        this.router.navigate(['/profile/' + params['id']]);
        //   this.author = this.userModel.getUserProfileByID(params['id']) as unknown as string;
        //   this.pageTitle = this.author + " Posts";
        // });
      });
    }
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
