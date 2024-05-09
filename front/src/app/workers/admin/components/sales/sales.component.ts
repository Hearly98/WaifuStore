import { Component } from '@angular/core';
import { Header } from '../../../../../models/sales';
import { VentasService } from '../../../../shared/services/ventas.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
})
export class SalesComponent {
  headers: Header[] = [];

  constructor(private headerService: VentasService) { }

  ngOnInit(): void {
    this.loadHeaders();
  }

  loadHeaders(): void {
    this.headerService.getAllHeaders().subscribe(
      (data: Header[]) => {
        this.headers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
