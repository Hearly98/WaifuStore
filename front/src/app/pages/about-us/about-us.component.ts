import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { About } from '../../../models/about';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent {
selectAbout?: About;
isModalOpen= false;

openModal(aboutInfo: About):void{
this.selectAbout= aboutInfo;
this.isModalOpen=true;

}
closeModal(): void {
  this.isModalOpen = false;
}
aboutInfo = [
  {image: 'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/origen-icon.svg', title: 'Nuestro Origen', content: 'En Waifu Store, todo comenzó con una pasión: el anime japonés. Hace más de 8 años, dimos vida a nuestro sueño, permitiendo que fans como nosotros pudieran tener cerca a los personajes de sus series favoritas. Desde nuestro modesto inicio, nos hemos dedicado a traer alegría a los hogares de nuestros clientes, convirtiéndonos en un puente directo entre el mundo del anime y sus admiradores en todo Perú.'},
  {image: 'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/confianza-icon.svg', title: 'Seguridad y Confianza', content: 'En Waifu Store, tu seguridad es nuestra prioridad. Comprendemos la importancia de la confianza en las transacciones online, por lo que ofrecemos un sistema de pago 100% seguro. Así, puedes disfrutar de la emoción de recibir tus figuras de acción favoritas con la tranquilidad de saber que tus datos y tu inversión están protegidos.'},
  {image: 'https://makbadxzoirjxbltiuwi.supabase.co/storage/v1/object/public/images/cobertura-icon.svg', title: 'Cobertura Nacional', content: 'Entendemos que la pasión por el anime no conoce de límites geográficos. Por eso, en Waifu Store nos enorgullece ofrecer envíos a todo el territorio peruano. No importa en qué parte del país te encuentres, tu próxima Waifu llegará directo a tu puerta.'}
]


}
