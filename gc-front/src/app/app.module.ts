import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatTabsModule,
  MatIconModule,
  MatDialogModule,
  MatCheckboxModule,
  MatDatepickerModule,
MatNativeDateModule
} from '@angular/material';

import { routing } from './app.routing';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor, fakeBackendProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/index';
import { HomeComponent } from './component/home/index';
import { MenuComponent } from './component/menu/index';
import { AdministrationComponent } from './component/administration/index';
import { StatistiquesComponent } from './component/statistiques/index';
import { RechercheCourrierComponent } from './component/recherche-courrier/index';
import { EnregistrementComponent } from './component/enregistrement/index';
import { ArchiveComponent } from './component/archive/index';

import { UsersComponent, AddUserDialogComponent } from './component/users/index';
import { CourrierComponent, AddCourrierDialog, UpdateCourrierDialog } from './component/courrier/index';
import { EntiteComponent, AddEntiteDialogComponent, UpdateEntiteDialogComponent } from './component/entite/index';

import {
  UserService,
  CourrierService,
  AuthenticationService,
  EntiteService
} from './_services/index';
import { ConfirmDialogsModule } from './_module/confirmdialog/ConfirmDialogsModule';
import { DatePipe } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    EnregistrementComponent,
    RechercheCourrierComponent,
    ArchiveComponent,

    AdministrationComponent,
    StatistiquesComponent,

    UsersComponent,
    AddUserDialogComponent,

    EntiteComponent,
    AddEntiteDialogComponent,
    UpdateEntiteDialogComponent,

    CourrierComponent,
    AddCourrierDialog,
    UpdateCourrierDialog,

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
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ConfirmDialogsModule
  ],
  providers: [
    DatePipe,
    AuthGuard,
    AuthenticationService,
    UserService,
    EntiteService,
    CourrierService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],

  entryComponents: [
    AddUserDialogComponent,

    AddEntiteDialogComponent,
    UpdateEntiteDialogComponent,

    AddCourrierDialog,
    UpdateCourrierDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
