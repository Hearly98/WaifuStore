import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterLink, RouterOutlet],
  templateUrl: './supervisor.component.html',
})
export class SupervisorComponent {
menues=[
  {path:'Dashboard', text:'Dashboard', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Chart_Line.svg'},
  {path:'Ventas', text:'Ventas', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Shopping_Cart.svg'},
  {
    path:'Mantenimiento', text:'Mantenimiento', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Data-icon.svg',
    submenu:[
        { path: 'Marcas', text: 'Marcas'},
        { path: 'Productos', text: 'Productos'},
        { path: 'Categorias', text: 'Categorías'},
    ]
  },
   {path:'Reportes', text:'Reportes', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/File_Document.svg'}
]
}
