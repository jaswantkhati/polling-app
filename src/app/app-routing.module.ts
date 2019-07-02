import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';

const routes: Routes = [
  {
    path : "", 
    component : HomePageComponent,
    pathMatch : "full"
  },
  {
path : "homepage",
component: HomePageComponent
  },
  {
    path : 'newpoll',
    component : NewPollComponent
  },
  {
    path : '**',
    component : HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
