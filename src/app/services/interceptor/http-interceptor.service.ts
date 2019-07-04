import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  accessToken: string;

  constructor() {
    this.accessToken = localStorage.getItem('token')
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req);

    if (this.accessToken && req.url.includes('do_vote')) {
      req = req.clone({
        setHeaders: {
          access_token: this.accessToken
        }
      });
    }

    return next.handle(req);
  }
}
