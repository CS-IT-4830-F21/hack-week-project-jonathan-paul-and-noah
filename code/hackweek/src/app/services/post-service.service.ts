import { HttpHeaders, HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { time } from 'console';
import { User } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: Post[];
  endpoint: string = 'http://18.224.23.71:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) {
    this.posts = [];
    //console.log(this.getPost(8));
    //this.getPosts();
    //console.log(this.deletePost(10));
    //this.savePost("Post 00", "C#", "test test test", "console.log('test')");
  }

  getPosts(){
    let api = `${this.endpoint}/posts/getPosts`;
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
      this.http.get(api, { headers: this.headers }).subscribe((res) => {
        for (let i = 0; i < (res as any).length; i++){
          this.parsePost((res as any)[i]);
        }
        console.log(this.posts);
        return true;
        });
  }

  parsePost(post: any){
    console.log(post);
    this.posts.push(new Post(post.authorId, post.code, post.description, post.id, post.language, post.timestamp, post.title));
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
    let jsonObj = {title: title, language: language, description: description, code: code};
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
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