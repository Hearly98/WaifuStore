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
  {image:"/assets/images/nendoroids-icon-2.svg",name: "Nendoroids"},
  {image:"/assets/images/escala-2-icon.svg",name: "Figuras a escala"},
  {image:"/assets/images/popUp-icon.svg",name: "Pop up parade"},
  {image:"/assets/images/figma-icon.svg",name: "Figma"}
 ]
}
