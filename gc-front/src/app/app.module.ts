import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routing';
import { AuthGuard } from './_guards/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/index';
import { HomeComponent } from './component/home/index';
import { MenuComponent } from './component/menu/index';
<<<<<<< HEAD
import { UserService, AuthenticationService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnregistrementComponent } from './component/enregistrement/enregistrement.component';
=======
import { UserService, AuthenticationService } from './_services/index'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { UsersComponent } from './component/users/index';

>>>>>>> b4e59236d27577cdb10e31193d3814e468413dc7



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
<<<<<<< HEAD
    EnregistrementComponent
=======
    UsersComponent
>>>>>>> b4e59236d27577cdb10e31193d3814e468413dc7
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
