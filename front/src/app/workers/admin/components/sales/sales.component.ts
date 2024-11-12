import { Component } from '@angular/core';
import { Header } from '../../../../../models/sales';
import { VentasService } from '../../../../shared/services/ventas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.component.html',
})
export class SalesComponent {
  headers: Header[] = [];

  constructor(private headerService: VentasService) { }
  isOpenUpdateModal = false
  isOpenModal = false;
  errorMessage: string | null=null;
  openModal(){
    this.isOpenModal=true;
  }
  closeModal(){
    this.isOpenModal=false;
  }
  closeUpdateModal(){
    this.isOpenUpdateModal=false;
  }
  titles=[
    {name: 'Código'},
    {name:'Cliente'},
    {name:'Fecha de Emisión'},
    {name:'Estado'},
    {name:'Monto'},
  ]
 /* ngOnInit(): void {
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
  }*/
}
