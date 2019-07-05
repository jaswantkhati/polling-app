import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TakepollService {

  constructor(
    private http: HttpClient
  ) { }

  allPoll() {
    return this.http.get(`${environment.apiBase}/list_polls`).toPromise();
  }

  votePoll(id, value) {
    return this.http.get(`${environment.apiBase}/do_vote`, {
      params: {
        id: id,
        option_text: value
      }
    }).toPromise();
  }
}
