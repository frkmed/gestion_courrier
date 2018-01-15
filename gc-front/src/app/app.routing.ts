import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/index';
import { LoginComponent } from './component/login/index';
import { AuthGuard } from './_guards/index';
import { UsersComponent } from './component/users/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
