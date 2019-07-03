import { Component, OnInit } from '@angular/core';
import { ViewpollService } from './viewpoll.service'

@Component({
  selector: 'app-viewpoll',
  templateUrl: './viewpoll.component.html',
  styleUrls: ['./viewpoll.component.css']
})
export class ViewpollComponent implements OnInit {

  pollList: any
  pollId: string
  hide: boolean
  pollOption: any
  Id : string

  constructor(
    private viewpollService: ViewpollService
  ) { }

  ngOnInit() {
    this.getPolls();
    this.hide = false;
  }

  async getPolls() {
    const data = await this.viewpollService.allPolls();
    this.pollList = data["data"];
  }

  edit(id) {
    this.pollId = id;
  }

  async onSubmit(pollTitle) {
    await this.viewpollService.updatePollTitle(this.pollId, pollTitle)
    this.pollId = ""
    this.getPolls();
  }

  async deletePoll(uniqueId) {
    await this.viewpollService.deletePoll(uniqueId);
    this.pollList = this.pollList.filter(e => e._id !== uniqueId)
  }

  show(id) {
    this.Id= id;
 }

  async deleteOption(id, option) {
    await this.viewpollService.deleteOption(id, option);
     this.pollList.forEach(list =>{
      if(list._id === id){
       list.options = list.options.filter(deletedOption => deletedOption.option !== option) }
    })
 }

  async addOption(id, value) {
    await this.viewpollService.addOption(id, value);
    this.Id=''
    this.getPolls();
    this.hide = false;
  }
}
