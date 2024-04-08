import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LatestReleasesComponent } from './components/latest-releases/latest-releases.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BannerComponent, LatestReleasesComponent, SubscriptionComponent, CategoriesComponent, FooterComponent],
  templateUrl: './index.component.html'
})
export class IndexComponent {
  contentCompromiso = 'Entregando alegría a través de figuras de anime que, ButtonComponent capturan la esencia de tus personajes favoritos.';
}
