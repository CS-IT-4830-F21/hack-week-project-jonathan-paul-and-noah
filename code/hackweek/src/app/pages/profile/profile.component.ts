import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/services/auth.service';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userModel: AuthService;
  postModel: PostServiceService;
  renderer: Renderer2;
  router: Router;
  currentUser: User;

  constructor( router: Router, builder: FormBuilder, renderer: Renderer2, userModel: AuthService, postModel: PostServiceService) {
    this.userModel = userModel;
    this.postModel = postModel;
    this.renderer = renderer;
    this.router = router; 
    this.currentUser = this.userModel.currentUser as User;

    if (localStorage.getItem("access_token") == null) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    console.log(888);
    if (this.userModel.isSignedIn()){
      this.currentUser = this.userModel.currentUser as User;
    }
    console.log(this.userModel.isSignedIn())
  }

}
