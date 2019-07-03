import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewpollComponent } from './components/viewpoll/viewpoll.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "homepage",
    pathMatch: "full"
  },
  {
    path: "homepage",
    component: HomePageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: NewPollComponent
      },
      {
        path: 'newpoll',
        component: NewPollComponent
      },
      {
        path: 'viewpoll',
        component: ViewpollComponent
      },
    ]
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
