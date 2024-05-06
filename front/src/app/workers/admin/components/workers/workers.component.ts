import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkerService } from '../../../../shared/services/worker.service';
import { Worker } from '../../../../../models/worker';
import { Roles } from '../../../../../models/roles';
import { User } from '../../../../../models/user';
import { ButtonComponent } from '../../../../components/button/button.component';
@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './workers.component.html',
})
export class WorkersComponent implements OnInit{
  titles=[
    {name: 'Nombre Trabajador'},
    {name:'Rol'},
  ]
  workers = signal<Worker[]>([]);
  users = signal<User[]>([]);
  roles = signal<Roles[]>([])
  selectedUser!: User;
  newEmailWorker: string= '';
  updateNameWorker = '';
  updateEmailWorker = '';
  selectedRol !: Roles; 
  isOpenModal = false;
  isOpenUpdateModal = false;
  errorMessage = ''
  submitted = false
  private workerService= inject(WorkerService)
  ngOnInit(): void {
    this.getWorkers()
  }
  openModal(){
    this.isOpenModal=true
  }
  closeModal(){
    this.isOpenModal= !this.isOpenModal
  }
  openUpdateModal(){
    this.isOpenUpdateModal=true
  }
  closeUpdateModal(){
    this.isOpenUpdateModal = !this.isOpenUpdateModal
  }
  getWorkers(){
    this.workerService.getAll()
    .subscribe({
      next:(workers)=>{
       this.workers.set(workers)
      },
      error:(err)=>{
        this.errorMessage = "No se puede cargar los trabajadores en estos momentos. Intentelo más tarde"
      }
    })
    
  }
  createWorkers(): void{
    const data = {
      id: 0,
      id_user: this.selectedUser,
      rol: this.selectedRol
    };
    this.workerService.create(data)
    .subscribe(
      response =>{
        this.submitted = true;
        this.getWorkers();
        this.closeModal;
      },
      error =>{
        this.errorMessage = "Error al registrar un Trabajador."
      },
    )
  }
}
