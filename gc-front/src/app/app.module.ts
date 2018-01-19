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
import { UserService, AuthenticationService, AlertService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnregistrementComponent } from './component/enregistrement/index';
import { UsersComponent, UpdateUserDialog } from './component/users/index';
import { AddUserDialog } from './component/users/users.component';
import { ArchiveComponent } from './component/archive/index';
import { CourrierComponent } from './component/courrier/index';
import { AdministrationComponent } from './component/administration/index';
import { StatistiquesComponent } from './component/statistiques/index';
import { RechercheCourrierComponent } from './component/recherche-courrier/index';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatButtonModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog'; 
import { JwtInterceptor, fakeBackendProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';

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
    StatistiquesComponent,
    AddUserDialog,
    UpdateUserDialog,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  entryComponents : [
    AddUserDialog,
    UpdateUserDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
