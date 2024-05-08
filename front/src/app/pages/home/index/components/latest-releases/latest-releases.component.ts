import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../../../../../components/product/product.component';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-latest-releases',
  standalone: true,
  imports: [CommonModule, ProductComponent, ButtonComponent, RouterLink],
  templateUrl: './latest-releases.component.html'
})
export class LatestReleasesComponent {
  product =[
    {image: "https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/zelda.svg", name: "The Legend of Zelda Link Tears of the Kingdom ver. DX Edition", amount: "S/150", description: ""},
    {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/hololive.svg", name: "Hololive Production Takanashi Kiara", amount: "S/195", description: ""},
    {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/yuuka.svg", name: "Yuuka - Daily Life Of A Treasurer", amount: "S/", description: ""},
    {image:"https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/products/plamax.png", name: "PLAMAX Urusei Yatsura Lum", amount: "S/", description: ""}
  ]


}
