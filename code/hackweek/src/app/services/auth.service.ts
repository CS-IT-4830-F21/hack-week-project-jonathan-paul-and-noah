import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'http://18.224.23.71:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', 'true');
  currentUser: User | null;

  constructor(private http: HttpClient, public router: Router) 
  { 
    this.currentUser = null;
    let token = localStorage.getItem("access_token");
    if (token != null){
      this.getUserProfile(localStorage.getItem("username") as string);
    }
    //this.signIn("newUser", "password");
    //this.signUp("noahF2", "12345", "user@gmail.com", "This is my bio.");
  }
  
  signUp(username: string, password: string, email: string, bio: string) {
    let api = `${this.endpoint}/users/createUser`;
    let jsonObj = {username: username, password: password, email: email, bio: bio};
    
      this.http.post(api, jsonObj).subscribe((res) => {
        let toggle = this.signIn(username, password);
        return toggle;
      }); 
  }
  
  signIn(user: string, pass: string) {
    this.http.post(`${this.endpoint}/authentication/generateToken`, {username: user, password: pass})
      .subscribe((res:any) =>
      { 
        console.log("token = " + res.token);
        localStorage.setItem('access_token', res.token);
        localStorage.setItem("username", user);
        this.getUserProfile(user)
        return true;
      }) 
  }

  isSignedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    if (authToken !== null) {
      this.currentUser = this.getUserProfile(localStorage.getItem("username") as string) as unknown as User;
      return true;
    }
    return false;
  }

  doSignOut() 
  {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    this.currentUser = null;
  }

  async getUserProfile(name: String) 
  {
    let api = `${this.endpoint}/users/getUserByName?username=${name}`;
    this.headers.set("Authorization", localStorage.getItem("access_token") as string);
    this.http.get(api, { headers: this.headers }).subscribe(async (res) => {
      this.currentUser = new User((res as any).id, (res as any).username, (res as any).email, (res as any).bio);
      console.log(this.currentUser);
      return true;
      });
      return false;
      // catchError(this.handleError)
  }

  getToken() 
  {
    return localStorage.getItem('access_token');
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

export class User {
  id: number;
  username: string;
  email: string;
  bio: string;

  constructor(id: number, username: string, email: string, bio: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.bio = bio;
  }
}
