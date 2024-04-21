import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../../../../../components/product/product.component';
import { ButtonComponent } from '../../../../../components/button/button.component';


@Component({
  selector: 'app-latest-releases',
  standalone: true,
  imports: [CommonModule, ProductComponent, ButtonComponent],
  templateUrl: './latest-releases.component.html'
})
export class LatestReleasesComponent {
  products =[
    {image: "https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/zelda.svg", name: "The Legend of Zelda Link Tears of the Kingdom ver. DX Edition", price: "S/150", description: ""},
    {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/hololive.svg", name: "Hololive Production Takanashi Kiara", price: "S/195", description: ""},
    {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/yuuka.svg", name: "Yuuka - Daily Life Of A Treasurer", price: "S/", description: ""},
    {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/plamax.png", name: "PLAMAX Urusei Yatsura Lum", price: "S/", description: ""}
  ]


}
