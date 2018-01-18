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

const routers: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'courrier', component: CourrierComponent, canActivate: [AuthGuard], outlet: 'loged', },
    { path: 'enregistrement', component: EnregistrementComponent, canActivate: [AuthGuard], outlet: 'loged' },
    { path: 'recherche', component: RechercheCourrierComponent, canActivate: [AuthGuard], outlet: 'loged' },
    { path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard], outlet: 'loged' },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard], outlet: 'loged' },
    { path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard], outlet: 'loged' },
    { path: 'stat', component: StatistiquesComponent, canActivate: [AuthGuard], outlet: 'loged' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: 'courrier', component: CourrierComponent, canActivate: [AuthGuard] },
            { path: 'enregistrement', component: EnregistrementComponent, canActivate: [AuthGuard] },
            { path: 'recherche', component: RechercheCourrierComponent, canActivate: [AuthGuard] },
            { path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard] },
            { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
            { path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard] },
            { path: 'stat', component: StatistiquesComponent, canActivate: [AuthGuard] },
        ],
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
