import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Post } from '../../services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userModel: AuthService;
  postModel: PostServiceService;
  renderer: Renderer2;
  router: Router;
  jsonObj = {A: "#45C3B8", B: "#48D1CC", C:"#4AC948", D:"#4A777A", E:"#4EEE94", F:"#50A6C2", G:"#7BBF6A", H:"#7EB6FF", I:"#802A2A", J:"#82CFFD", K:"#8B6969", L:"#90EE90", M:"#C76E06	", N:"#C77826", O:"#CAFF70", P:"#CC4E5C", Q:"#CC7F32", R:"#CCFFCC", S:"#CD5B45", T:"#CDB79E", U:"#CDC673", V:"#D0FAEE", W:"#D43D1A", X:"#DB2929", Y:"#EDCB62", Z:"#EED5D2"};

  posts: Post[] | null;
  authors: string[];

  sampleCode = "print(\"Here is some sample code.\")\nfor i in range(5):\n\tprint(\"Hello.\")"
  sampleImage = "../../../assets/pic.JPG"
  sampleUsername = "paulhemingway123"
  sampleTitle = "Print statements and For loops!"
  sampleDescription = "In this code, I first print 'Here is some sample code.' Then, I use a for loop to print 'Hello.' 5 times."
  sampleTime = "44m"

  constructor( router: Router, builder: FormBuilder, renderer: Renderer2, userModel: AuthService, postModel: PostServiceService) {
    this.userModel = userModel;
    this.postModel = postModel;
    this.renderer = renderer;
    this.router = router;
    this.posts = this.postModel.posts; 
    this.authors = this.userModel.authors;
  }

  ngOnInit(): void {
    //this.postModel.getPosts();
    console.log(this.posts);
  }

  

}
