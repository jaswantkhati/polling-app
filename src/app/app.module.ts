import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewpollComponent } from './components/viewpoll/viewpoll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewPollComponent,
    DashboardComponent,
    ViewpollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
