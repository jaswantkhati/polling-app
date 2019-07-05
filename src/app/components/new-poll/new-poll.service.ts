import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NewPollService {

  constructor( private http :HttpClient)
   { }

   createPoll(body){
    return this.http.get(`${environment.apiBase}/add_poll`,{
      params:{
        title: body.poll,
        options: `${body.option1}____${body.option2}____${body.option3}____${body.option4}`
      }
    }).toPromise();
   }
}
