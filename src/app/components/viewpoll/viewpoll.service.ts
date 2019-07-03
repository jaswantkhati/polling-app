import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewpollService {

  constructor(
    private http : HttpClient
  ) { }

  allPolls(){
    return this.http.get(`${environment.apiBase}/list_polls`).toPromise();
  }

   updatePollTitle(id, title) {
    return this.http.get(`${environment.apiBase}/update_poll_title?id=${id}&title=${title}`).toPromise();
   }

   deletePoll(uniqueId){
     return this.http.get(`${environment.apiBase}/delete_poll?id=${uniqueId}`).toPromise();
   }

   deleteOption(id , option){
     return this.http.get(`${environment.apiBase}/delete_poll_option?id=${id}&option_text=${option}`).toPromise();
   }
   
   addOption(id,value){
     return this.http.get(`${environment.apiBase}/add_new_option?id=${id}&option_text=${value}`).toPromise();
   }

}
