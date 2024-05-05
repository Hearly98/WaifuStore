import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IndexComponent } from './pages/home/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { BrandsComponent } from './admin/components/brands/brands.component';
import { CategoriesComponent } from './admin/components/categories/categories.component';
import { ProductsComponent } from './admin/components/products/products.component';
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
   {
        path:'administrador',
        component:AdminComponent,
        children:[
            {
                path:'Dashboard',
                component:DashboardComponent
            }, 
            {
                path:'Marcas',
                component:BrandsComponent
            },
            {
                path:'Categorias',
                component:CategoriesComponent
            },
            {
                path:'Productos',
                component:ProductsComponent,
            },
        ]
   }
];
