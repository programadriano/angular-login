import { Routes, RouterModule, CanActivate } from '@angular/router'
import { ModuleWithProviders } from "@angular/core/src/metadata";

import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login.component";


export const APP_ROUTES: Routes = [
    {
        path: '', component: HomeComponent,
        //  canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);