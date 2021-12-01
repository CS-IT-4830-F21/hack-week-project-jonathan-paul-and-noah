import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(http: HttpClient, router: Router, builder: FormBuilder, renderer: Renderer2, userModel: AuthService, postModel: PostServiceService) {
    this.userModel = userModel;
    this.postModel = postModel;
    this.renderer = renderer;
    this.router = router;
    this.postModel.getPosts();
  }

  @ViewChild('login', {static: true}) login!: ElementRef<HTMLElement>;
  @ViewChild('logout', {static: true}) logout!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.initializeForm();
    if (this.userModel.isSignedIn() == true){
      this.loggedIn = true;
      //this.postModel.getPosts();
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
    this.router.navigate(['/home']);
    this.signInForm.reset();
    this.loggedIn = true;
    
    // if (localStorage.getItem('access_token') != null && localStorage.getItem('username') == username) this.loggedIn = true;
    // if (this.userModel.signIn(username, password) == true){
    //   console.log("777");
    //   this.signInForm.value['username'] = this.signInForm.value['password'] = "";
    // }
  }

  logOut(){
    this.userModel.doSignOut();
    this.loggedIn = false;
    this.router.navigate(['/create-account']);
  }

}
