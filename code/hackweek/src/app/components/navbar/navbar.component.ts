import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService, User } from 'src/app/services/auth.service';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;
  signInForm: FormGroup = new FormGroup({key: new FormControl()});
  postModel: PostServiceService;
  userModel: AuthService;
  router: Router;
  renderer: Renderer2;
  userId: number;
  constructor(http: HttpClient, router: Router, builder: FormBuilder, renderer: Renderer2, userModel: AuthService, postModel: PostServiceService) {
    this.userModel = userModel;
    this.postModel = postModel;
    this.renderer = renderer;
    this.router = router;
    
    this.router.events.subscribe((ev)=>{
      if (ev instanceof NavigationEnd){
        this.verifyUser();
      }
    });

    if (localStorage.getItem("access_token") != null){
      this.userId =  9; //(this.userModel.currentUser as User).id;
    }
    else {
      this.userId = 1;
    }
  }

  @ViewChild('login', {static: true}) login!: ElementRef<HTMLElement>;
  @ViewChild('logout', {static: true}) logout!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    if (localStorage.getItem("access_token") != null) this.userModel.setUserID(localStorage.getItem("username") as string);
    this.initializeForm();
    if (localStorage.getItem("access_token") != null){
      this.loggedIn = true;
    }
  }

  initializeForm(): void {
    this.signInForm = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    });
  }

  async onSubmit() {
    let username= this.signInForm.value['username'];
    let password = this.signInForm.value['password'];
    let toggle = await this.userModel.signIn(username, password);
    this.signInForm.reset();
    this.userModel.setUserID(username);
    this.router.navigate(['/home']);
    
    // if (localStorage.getItem('access_token') != null && localStorage.getItem('username') == username) this.loggedIn = true;
    // if (this.userModel.signIn(username, password) == true){
    //   console.log("777");
    //   this.signInForm.value['username'] = this.signInForm.value['password'] = "";
    // }
  }

  verifyUser(){
    if (localStorage.getItem("loggedIn") == "true"){
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  viewProfile(userId: number){
    this.userModel.profile = null;
    this.postModel.userPosts = [];
    this.postModel.getUserPosts(userId);
    this.userModel.setUserProfile(localStorage.getItem("username") as string);
  }

  logOut(){
    this.userModel.doSignOut();
    this.loggedIn = false;
    localStorage.setItem("loggedIn", "false");
    this.router.navigate(['/create-account']);
  }

}
