import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = '***path to api***';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: User;

  constructor(private http: HttpClient, public router: Router) { this.currentUser = new User("", "", "") }

  signUp(user: User) {
    let api = '${this.endpoint}/users/createUser';
    this.http.post(api, user).subscribe((res) => {
      if ((res as HttpResponse<User>).status == HttpStatusCode.Conflict){
        // username already exists
        return // ...
      }
      else {
        // user has been created
        return // ...
      }
    }); //pipe(catchError(this.handleError));
  }

  signIn(username: string, password: string) {
    // first need to validate username & password?
    // ******************************************
    this.currentUser = this.getUserProfile(username) as unknown as User;
    if (this.currentUser == null) {
      // user does not exist

    }
    else {
      this.http.post(`${this.endpoint}/authentication/generateToken`, username)
        .subscribe((res:any) => {
          localStorage.setItem('access_token', res.token);
        })
        localStorage.setItem("username", username);
    }
  }

  isSignedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    if (authToken !== null) {
      this.currentUser = this.getUserProfile(localStorage.getItem("username") as string) as unknown as User;
      return true;
    }
    return false;
  }

  doSignOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
  }

  getUserProfile(name: String) {
    let api = `${this.endpoint}/users/getUserByName/${name}`;
    let data = null;
    this.http.get(api, { headers: this.headers }).subscribe((res) => {
        if ((res as HttpResponse<User>).status == HttpStatusCode.NotFound){
          data = null;
        }
        data = (res as HttpResponse<User>).body;
      });
      return data;
      // catchError(this.handleError)
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
  _id: String;
  username: String;
  email: String;
  password: String;

  constructor(username: String, email: String, password: String) {
    this._id = "not set";
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
