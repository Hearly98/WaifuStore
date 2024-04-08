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
    {image: "/assets/images/zelda.svg", name: "The Legend of Zelda Link Tears of the Kingdom ver. DX Edition", price: "S/150", description: ""},
    {image:"/assets/images/hololive.svg", name: "Hololive Production Takanashi Kiara", price: "S/195", description: ""},
    {image:"/assets/images/yuuka.svg", name: "Yuuka - Daily Life Of A Treasurer", price: "S/", description: ""},
    {image:"/assets/images/plamax.png", name: "PLAMAX Urusei Yatsura Lum", price: "S/", description: ""}
  ]


}
