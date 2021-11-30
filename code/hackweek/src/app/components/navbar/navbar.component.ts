import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
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
  constructor(http: HttpClient, router: Router, builder: FormBuilder, renderer: Renderer2, userModel: AuthService, postModel: PostServiceService) {
    this.userModel = userModel;
    this.postModel = postModel;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signInForm = new FormGroup({
      "username": new FormControl(null, [Validators.required]),
      "password": new FormControl(null, [Validators.required])
    });
  }

  onSubmit(): void {
    let username= this.signInForm.value['username'];
    let password = this.signInForm.value['password'];
    console.log(this.userModel.signIn(username, password));
    // if (this.userModel.signIn(username, password) == true){
    //   console.log("777");
    //   this.signInForm.value['username'] = this.signInForm.value['password'] = "";
    // }
  }

}
