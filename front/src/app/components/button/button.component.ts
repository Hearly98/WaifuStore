import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
@Input() name: string='';
@Input() colorClass: string='bg-white h-[53px]';
@Input() additionalClass: string = 'w-full rounded text-white';
}
