import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../components/button/button.component';


@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent {

}
