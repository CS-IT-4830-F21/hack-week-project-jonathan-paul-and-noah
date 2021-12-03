import { HttpHeaders, HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { time } from 'console';
import { AuthService, User } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: Post[];
  userPosts: Post[];
  authors: string[];
  endpoint: string = 'http://18.224.23.71:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  userModel: AuthService;

  constructor(private http: HttpClient, public router: Router, userModel: AuthService) {
    this.userModel = userModel;
    this.posts = [];
    this.userPosts = [];
    this.authors = [];
    // console.log(this.getPost(8));
    //this.getPosts();
    //console.log(this.deletePost(10));
    //this.savePost("Post 00", "C#", "test test test", "console.log('test')");
  }

  getPosts(){
    this.posts = [];
    this.userModel.authors = [];
    let api = `${this.endpoint}/posts/getPosts`;
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
      this.http.get(api, { headers: this.headers }).subscribe((res) => {
        for (let i = 0; i < (res as any).length; i++){
          this.parsePost(this.posts, (res as any)[i], true);
        }
        return true;
        });
  }

  getUserPosts(id: number){
    let api = `${this.endpoint}/posts/getPostsByUserId?id=${id}`;
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
      this.http.get(api, { headers: this.headers }).subscribe((res) => {
        this.userPosts = [];
        for (let i = 0; i < (res as any).length; i++){
          this.parsePost(this.userPosts, (res as any)[i], false);
        }
        return true;
      });
  }

  parsePost(postsObj: Post[], post: any, toggle: boolean){
    // console.log(post);
    if (toggle) this.userModel.getUserProfileByID(post.authorId);
    postsObj.unshift(new Post(post.authorId, post.code, post.description, post.id, post.language, post.timestamp, post.title));
  }

  getPost(id: number){
    let api = `${this.endpoint}/posts/getPost?id=${id}`;
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
      this.http.get(api, { headers: this.headers }).subscribe((res) => {
        let data = new Post((res as Post).authorId, (res as Post).code, (res as Post).description, (res as Post).id, (res as Post).language, (res as Post).timestamp, (res as Post).title);
        return data;
      });
  }

  deletePost(id: number){
    let api = `${this.endpoint}/posts/deletePost?id=${id}`;
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
      this.http.delete(api, { headers: this.headers }).subscribe((res) => {
        if (res == true){
          return true;
        }
        else {
          return false;
        }
      });

  }

  savePost(title: string, language: string, description: string, code: string){
    let api = `${this.endpoint}/posts/savePost`;
    let jsonObj = {title: title, description: description, language: language, code: code};
    // let jsonObj = `{title: ${title}, description: ${description}, language: ${language}, code: ${code}}`;
    this.headers.append("Authorization", localStorage.getItem("access_token") as string);
    this.http.post(api, jsonObj, { headers: this.headers }).subscribe((res) => {
        console.log(res);
    });
  }
}

export class Post {
  authorId: number;
  code: string;
  description: string;
  id: number;
  language: string;
  timestamp: string;
  title: string;

  constructor(authorId: number, code: string, description: string, id: number, language: string, timestamp: string, title: string){
    this.authorId = authorId;
    this.code = code;
    this.description = description;
    this.id = id;
    this.language = language;
    this.timestamp = timestamp;
    this.title = title;
    
  }
}