import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from "./app.routing";
import { AuthGuard } from "./guards/auth.guard";
import { HttpUtilService } from "./services/http-util-service";
import { LoginComponent } from './login/login.component';
import { LoginService } from "./services/login-service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard, HttpUtilService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
