import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/index';
import { LoginComponent } from './component/login/index';
import { EnregistrementComponent } from './component/enregistrement/enregistrement.component'
import { AuthGuard } from './_guards/index';
import { UsersComponent } from './component/users/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
<<<<<<< HEAD
    { path: 'enregistrement', component: EnregistrementComponent },
=======
    { path: 'users', component: UsersComponent},
>>>>>>> b4e59236d27577cdb10e31193d3814e468413dc7
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
