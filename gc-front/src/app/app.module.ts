import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AuthGuard } from './_guards/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/index';
import { HomeComponent } from './component/home/index';
import { MenuComponent } from './component/menu/index';
import { UserService } from './_services/index';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
