import { Component, OnInit, inject, signal } from '@angular/core';
import { Document } from '../../../../../models/document';
import { User } from '../../../../../models/user';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../shared/services/user.service';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit{
  errorMessage = ''
  users = signal<User[]>([]);
  documents = signal<Document[]>([]);
  private userService = inject(UserService)
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getAll()
    .subscribe({
      next:(users)=>{
        this.users.set(users)
      },
      error:(err)=> {
        this.errorMessage = "En estos momentos no se puede cargar los Usuario. Por favor intente más tarde"
      },
    })
  }
  createUser():void {
    const data = {

    }
    this.userService.create(data)
    .subscribe({
      next:(users)=>{
        this.users.set(users)
      },
      error:(err)=>{
        this.errorMessage = "Ocurrió un error al crear un Usuario"
      }
    })
  }
}
