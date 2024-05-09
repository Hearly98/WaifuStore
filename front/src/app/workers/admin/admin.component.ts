import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterLink, RouterOutlet],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
menues=[
  {path:'Dashboard', text:'Dashboard', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Chart_Line.svg'},
  {
    path:'Mantenimiento', text:'Mantenimiento', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Data-icon.svg',
    submenu:[
        { path: 'Marcas', text: 'Marcas'},
        { path: 'Productos', text: 'Productos'},
        { path: 'Categorias', text: 'Categorías'},
        { path: 'Usuarios', text: 'Usuarios'},
        { path: 'Trabajadores', text: 'Trabajadores'}
    ]
  },
]
}
