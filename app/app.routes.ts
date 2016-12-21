
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    SearchComponent,
    FilesComponent,
    RMComponent,
    LoginDemoComponent,
    SettingComponent
} from './components/index';

export const appRoutes: Routes = [

    { path: 'home', component: FilesComponent },
    { path: 'files', component: FilesComponent },
    { path: 'rm', component: RMComponent },

    { path: 'search', component: SearchComponent },


    { path: '', component: LoginDemoComponent },
    { path: 'login', component: LoginDemoComponent },
    { path: 'settings', component: SettingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
