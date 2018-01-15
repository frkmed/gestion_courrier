import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/index';
import { LoginComponent } from './component/login/index';
import { EnregistrementComponent } from './component/enregistrement/enregistrement.component'
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'enregistrement', component: EnregistrementComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
