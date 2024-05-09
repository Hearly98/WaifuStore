import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkerService } from '../../../../shared/services/worker.service';
import { Worker } from '../../../../../models/worker';
import { Roles } from '../../../../../models/roles';
import { User } from '../../../../../models/user';
import { ButtonComponent } from '../../../../components/button/button.component';
import { UserService } from '../../../../shared/services/user.service';
import { RolService } from '../../../../shared/services/rol.service';
@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './workers.component.html',
})
export class WorkersComponent implements OnInit{
  titles=[
    {name: 'Nombre Trabajador'},
    {name: 'Email'},
    {name:'Rol'},
  ]
  workers = signal<Worker[]>([]);
  users = signal<User[]>([]);
  roles = signal<Roles[]>([])
  selectedUser!: User;
  newEmailWorker: string= '';
  selectedWorker !: Worker;
  selectedRol !: Roles; 
  isOpenModal = false;
  isOpenUpdateModal = false;
  errorMessage = ''
  submitted = false
  currentId!: number;
  private workerService= inject(WorkerService)
  private userService = inject(UserService)
  private rolService = inject(RolService)
  ngOnInit(): void {
    this.getWorkers();
    this.loadUsers();
    this.loadRoles();
  }
  openModal(){
    this.isOpenModal=true
  }
  closeModal(){
    this.isOpenModal= !this.isOpenModal
  }
  openUpdateModal(worker : Worker){
    this.currentId = worker.id;
    this.selectedWorker = worker;
    this.selectedRol = worker.rol
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
  loadRoles(){
    this.rolService.getAll()
    .subscribe({
      next:(roles)=>{
        this.roles.set(roles)
      },
      error:(err)=>{
        this.errorMessage = "No se puede cargar los roles en estos momentos. Intentelo más tarde"
      }
    })
  }
  loadUsers(){
    this.userService.getUserWithoutRolWorker()
    .subscribe({
      next:(users)=>{
       this.users.set(users)
      },
      error:(err)=>{
        this.errorMessage = "No se puede cargar los usuarios en estos momentos. Intentelo más tarde"
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
        this.closeModal();
      },
      error =>{
        this.errorMessage = "Error al registrar un Trabajador."
      },
    )
  }
  updateWorkers():void{
    const data = {
      id: this.currentId,
      id_user: this.selectedWorker.id_user,
      rol: this.selectedRol
    }
    this.workerService.update(data)
    .subscribe(
      response =>{
        this.submitted = true;
        this.getWorkers();
        this.closeUpdateModal();
      },
      error =>{
        this.errorMessage = "Error al registrar un Trabajador."
      },
    )
  }
}
