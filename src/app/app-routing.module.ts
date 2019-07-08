import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewpollComponent } from './components/viewpoll/viewpoll.component';
import { TakepollComponent } from './components/takepoll/takepoll.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './components/auth/auth.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "auth",
    component: AuthComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo : 'newpoll',
        pathMatch: "full"
      },
      {
        path: 'newpoll',
        component: NewPollComponent
      },
      {
        path: 'viewpoll',
        component: ViewpollComponent
      },
      {
        path: 'takepoll',
        component: TakepollComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: "auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
