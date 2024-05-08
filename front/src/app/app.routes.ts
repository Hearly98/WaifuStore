import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IndexComponent } from './pages/home/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './workers/admin/components/dashboard/dashboard.component';
import { AdminComponent } from './workers/admin/admin.component';
import { BrandsComponent } from './workers/components/brands/brands.component';
import { CategoriesComponent } from './workers/components/categories/categories.component';
import { ProductsComponent } from './workers/components/products/products.component';
import { WorkersComponent } from './workers/admin/components/workers/workers.component';
import { SupervisorComponent } from './workers/supervisor/supervisor.component';
import { UsersComponent } from './workers/admin/components/users/users.component';
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
            {
                path: 'Trabajadores',
                component: WorkersComponent
            },
            {
                path: 'Usuarios',
                component: UsersComponent
            }
        ]
   },
   {
    path:'supervisor',
    component:SupervisorComponent,
    children:[
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
