import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NewPollService } from './new-poll.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {


  apiInProgress : boolean

  constructor(
    private formBuilder :FormBuilder,
    private route : Router,
    private newPollServices : NewPollService,
  ) { }

  ngOnInit() {
  }
  addPoll = this.formBuilder.group({
    poll :["",Validators.required],
    option1 :["",Validators.required],
    option2 :["",Validators.required],
    option3 :["",Validators.required],
    option4 :["",Validators.required]
  })

  onLogout(){
  localStorage.clear();
  this.route.navigate(['/homepage'])
}

async createPoll(formData){
  this.apiInProgress = true;
  const newpoll = await this.newPollServices.createPoll(formData);
  this.addPoll.reset();
  this.apiInProgress = false;
}
}
