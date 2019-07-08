import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewpollComponent } from './components/viewpoll/viewpoll.component';
import { TakepollComponent } from './components/takepoll/takepoll.component';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPollComponent,
    DashboardComponent,
    ViewpollComponent,
    TakepollComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
