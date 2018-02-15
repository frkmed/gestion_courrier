import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
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
import { ArchiveComponent } from './component/archive/index';

import { UsersComponent, AddUserDialogComponent } from './component/users/index';
import { CourrierComponent, AddCourrierDialogComponent, DiffusionDialogComponent } from './component/courrier/index';
import { EntiteComponent, AddEntiteDialogComponent } from './component/entite/index';

import {
  UserService,
  CourrierService,
  AuthenticationService,
  EntiteService,
  InstructionService
} from './_services/index';
import { ConfirmDialogsModule } from './_module/confirmdialog/ConfirmDialogsModule';
import { DatePipe } from "@angular/common";
import { DiffusionComponent } from './component/diffusion/diffusion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    RechercheCourrierComponent,
    ArchiveComponent,

    AdministrationComponent,
    StatistiquesComponent,

    UsersComponent,
    AddUserDialogComponent,

    EntiteComponent,
    AddEntiteDialogComponent,

    CourrierComponent,
    AddCourrierDialogComponent,
    DiffusionDialogComponent,
    DiffusionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
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
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    ConfirmDialogsModule
  ],
  providers: [
    DatePipe,
    AuthGuard,
    AuthenticationService,
    UserService,
    EntiteService,
    CourrierService,
    InstructionService,
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

    AddCourrierDialogComponent,
    DiffusionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
