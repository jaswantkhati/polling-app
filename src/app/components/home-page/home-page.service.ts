import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(
    private http : HttpClient
  ) { }

  login( body ){
    return this.http.get(`${environment.apiBase}/login?username=${body.email}&password=${body.password}`).toPromise();
  }

  registration( body ){
    return this.http.get(`${environment.apiBase}/add_user?username=${body.email}&password=${body.password}&role=${body.user}`).toPromise();
  }
}
