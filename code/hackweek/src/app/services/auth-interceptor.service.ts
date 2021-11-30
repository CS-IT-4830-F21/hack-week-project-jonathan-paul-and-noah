import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor 
{

    constructor(private authService : AuthService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    const token = this.authService.getToken();

    // console.log(token) if for some reason you need this for debugging
    if (!token) 
    {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `${token}`),
    });

    return next.handle(req1);
  }
}