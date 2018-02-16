import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './component/home/index';
import { LoginComponent } from './component/login/index';
import { UsersComponent } from './component/users/index';
import { CourrierComponent } from './component/courrier/index';
import { AdministrationComponent } from './component/administration/index';
import { StatistiquesComponent } from './component/statistiques/index';
import { EntiteComponent } from './component/entite/index';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: 'courrierdepart', component: CourrierComponent, canActivate: [AuthGuard] },
            {
                path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard],
                children: [
                    { path: 'users', component: UsersComponent, canActivate: [AuthGuard], outlet: 'aux' },
                    { path: 'entite', component: EntiteComponent, canActivate: [AuthGuard], outlet: 'aux' },
                ]
            },
            { path: 'stat', component: StatistiquesComponent, canActivate: [AuthGuard] },
        ],
    },
    { path: 'login', component: LoginComponent },
    
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);
