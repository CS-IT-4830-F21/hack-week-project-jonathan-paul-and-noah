import { HttpHeaders, HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: Post[];
  endpoint: string = 'localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) {
    this.posts = this.getPosts() as unknown as Post[];
  }

  getPosts(){
    let api = `${this.endpoint}/posts/getPosts`;
    this.http.get(api, { headers: this.headers }).subscribe((res) => {
      return res as Post[];
      });
      // catchError(this.handleError)
  }

  getPost(id: string){
    let api = `${this.endpoint}/posts/getPost/${id}`;
    this.http.get(api).subscribe((res) => {
      return (res as HttpResponse<Post>).status == HttpStatusCode.Ok ? (res as HttpResponse<Post>).body as Post: null;
      });
  }

  deletePost(id: string){
    let api = `${this.endpoint}/posts/deletePost/${id}`;
    this.http.delete(api).subscribe((res) => {
      return res as Post;
    });
  }

  savePost(){
    let api = `${this.endpoint}/posts/savePost`;
    // save post
  }
}

export class Post {
  title: string;
  description: string;
  code: string;
  language: string;

  constructor(title: string, description: string, code: string, language: string, link: string){
    this.title = title;
    this.description = description;
    this.code = code;
    this.language = language;
  }
}