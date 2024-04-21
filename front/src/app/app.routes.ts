import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IndexComponent } from './pages/home/index/index.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'inicio',
                component:IndexComponent
            },
            {
                path:'contacto',
                component:ContactComponent,
            },
            {
                path:'nosotros',
                component:AboutUsComponent,
            },
        ]
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'registro',
        component:RegisterComponent,
    },
   
];
