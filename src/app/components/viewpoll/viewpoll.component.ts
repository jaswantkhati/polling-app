import { Component, OnInit } from '@angular/core';
import { ViewpollService } from './viewpoll.service'
import { PagerService } from './paginatoin services/pager.service'

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
  pager: any = {};
  pagedItems: any[];
  apInProgress: boolean;
  
constructor(
    private viewpollService: ViewpollService,
    private pagerservice : PagerService
  ) { }

  ngOnInit() {
    this.getPolls();
    this.hide = false;
   
  }

  async getPolls() {
    this.apInProgress =true;
    const data = await this.viewpollService.allPolls();
    this.apInProgress =false
    this.pollList = data["data"];
    this.setPage(1);
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
    this.pollList = this.pollList.filter(list=> list._id!== uniqueId);
    this.setPage(1);
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
  setPage(page: number) {
    // get pager object from service/list_polls
    this.pager = this.pagerservice.getpager(this.pollList.length, page);

    // get current page of items
    this.pagedItems = this.pollList.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
  
}
