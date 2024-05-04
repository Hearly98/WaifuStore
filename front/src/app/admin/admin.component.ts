import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterLink, RouterOutlet],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
menues=[
  {path:'Dashboard', text:'Dashboard', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Chart_Line.svg'},
  {path:'Ventas', text:'Ventas', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Shopping_Cart.svg'},
  {path:'Compras', text:'Compras', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Shopping_Bag.svg'},
  {
    path:'Mantenimiento', text:'Mantenimiento', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/Data-icon.svg',
    submenu:[
        { path: 'Marcas', text: 'Marcas', img: 'https://.../Marca-icon.svg' },
        { path: 'Productos', text: 'Productos', img: 'https://.../Producto-icon.svg' },
        { path: 'Categorias', text: 'Categorías', img: 'https://.../Categoria-icon.svg' }
    ]
  },
   {path:'Reportes', text:'Reportes', img:'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/File_Document.svg'}
]
}
