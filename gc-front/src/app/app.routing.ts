import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './component/home/index';
import { LoginComponent } from './component/login/index';
import { EnregistrementComponent } from './component/enregistrement/index';
import { RechercheCourrierComponent } from './component/recherche-courrier/index';
import { UsersComponent } from './component/users/index';
import { ArchiveComponent } from './component/archive/index';
import { CourrierComponent } from './component/courrier/index';
import { AdministrationComponent } from './component/administration/index';
import { StatistiquesComponent } from './component/statistiques/index';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'courrier', component: CourrierComponent },
    { path: 'enregistrement', component: EnregistrementComponent },
    { path: 'recherche', component: RechercheCourrierComponent },
    { path: 'archive', component: ArchiveComponent },
    { path: 'users', component: UsersComponent },
    { path: 'admin', component: AdministrationComponent },
    { path: 'stat', component: StatistiquesComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
