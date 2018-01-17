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
import { UserService, AuthenticationService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnregistrementComponent } from './component/enregistrement/index';
import { UsersComponent } from './component/users/index';
import { ArchiveComponent } from './component/archive/index';
import { CourrierComponent } from './component/courrier/index';
import { AdministrationComponent } from './component/administration/index';
import { StatistiquesComponent } from './component/statistiques/index';
import { RechercheCourrierComponent } from './component/recherche-courrier/index';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    EnregistrementComponent,
    RechercheCourrierComponent,
    UsersComponent,
    ArchiveComponent,
    CourrierComponent,
    AdministrationComponent,
    StatistiquesComponent
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
