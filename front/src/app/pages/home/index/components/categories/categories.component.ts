import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
 categories = [
  {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/nendoroids-icon-2.svg",name: "Nendoroids"},
  {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/escala-2-icon.svg",name: "Figuras a escala"},
  {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/popUp-icon.svg",name: "Pop up parade"},
  {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/figma-icon.svg",name: "Figma"}
 ]
}
