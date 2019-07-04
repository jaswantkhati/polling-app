import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  onLogout(){
    localStorage.clear();
    this.route.navigate(['/homepage'])
  }

  nevigateToView(){
    this.route.navigate(['/dashboard/viewpoll'])
  }
  
  nevigateToNew(){
    this.route.navigate(['/dashboard/newpoll'])
  }

  nevigateToTake(){
    this.route.navigate(['/dashboard/takepoll'])
  }

}
