import { Component, OnInit } from '@angular/core';
import { TakepollService } from './takepoll.service';
import{ FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-takepoll',
  templateUrl: './takepoll.component.html',
  styleUrls: ['./takepoll.component.css']
})
export class TakepollComponent implements OnInit {

  pagedItems: any[];
  pollList : any
  selectedOption :any

  constructor(
    private takepollsevices : TakepollService,
    private formbuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.getPolls();
  }
  async getPolls(){
   const data = await this.takepollsevices.allPoll();
   this.pollList = data["data"];
   console.log(this.pollList);
  }
async checkBoxValue(id,value) {
   await this.takepollsevices.votePoll(id,value.checkBox);
   console.log(value.checkBox);
   console.log(id)
  }
  voteForm = this.formbuilder.group({
    checkBox: ['']
  })

}
