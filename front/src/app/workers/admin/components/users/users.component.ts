import { Component, OnInit, inject, signal } from '@angular/core';
import { Document } from '../../../../../models/document';
import { User } from '../../../../../models/user';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../shared/services/user.service';
import { DocumentService } from '../../../../shared/services/document.service';
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
  private documentService = inject(DocumentService)
  isOpenModal = false;
  isOpenUpdateModal = false;
  newNameUser: string = '';
  newEmailUser: string = '';
  newPasswordUser: string = '';
  newBirthdateUser: string = '';
  selectedDocumentType !: Document;
  newDocumentUser: string = '';
  updateNameUser = '';
  updateEmailUser = '';
  updatePasswordUser = '';
  updateBirthdateUser = '';
  updateDocumentUser = '';
  currentUserId!: number;
  submitted = false
  titles= [
    {name : 'Usuario'},
    {name: 'Email'},
    {name: 'Documento'},
    {name: 'Fecha de Nacimiento'}
  ]
  openModal(){
    this.isOpenModal = true
  }
  closeModal(){
    this.isOpenModal = !this.isOpenModal
  }
  openUpdateModal(user: User): void{
    this.currentUserId = user.id
    this.isOpenUpdateModal = true
    this.updateNameUser = user.name;
    this.updateEmailUser = user.email;
    this.updateDocumentUser = user.document;
    this.updatePasswordUser = user.password;
    this.updateBirthdateUser = user.birthdate;
    this.selectedDocumentType = user.documentType;
    this.updatePasswordUser = user.password;
    this.updateDocumentUser = user.document;
  }
  closeUpdateModal(){
    this.isOpenUpdateModal = !this.isOpenUpdateModal
  }
  ngOnInit(): void {
    this.getUsers();
    this.loadDocuments();
  }

  getUsers(){
    this.userService.getUserWithoutRolWorker()
    .subscribe({
      next:(users)=>{
        this.users.set(users)
      },
      error:(err)=> {
        this.errorMessage = "En estos momentos no se puede cargar los Usuario. Por favor intente más tarde"
      },
    })
  }
  loadDocuments(){
    this.documentService.getAll()
    .subscribe({
      next:(document)=>{
        this.documents.set(document)
      },
      error:(err)=> {
        this.errorMessage = "En estos momentos no se puede cargar los Documentos. Por favor intente más tarde"
      },
    })
  }
  createUser():void {
    const data = {
      id: 0,
      name: this.newNameUser,
      email: this.newEmailUser,
      password: this.newPasswordUser,
      birthdate: this.newBirthdateUser,
      documentType: this.selectedDocumentType,
      document: this.newDocumentUser
    }
    this.userService.create(data)
    .subscribe({
      next:(users)=>{
        this.users.set(users)
        this.closeModal()
        this.getUsers()
      },
      error:(err)=>{
        this.errorMessage = "Ocurrió un error al crear un Usuario"
      }
    })
  }
  updateUser():void {
    const data ={
      id: this.currentUserId,
      name: this.updateNameUser,
      email: this.updateEmailUser,
      password: this.updatePasswordUser,
      birthdate: this.updateBirthdateUser,
      documentType: this.selectedDocumentType,
      document: this.updateDocumentUser
    }
    this.userService.update(data)
    .subscribe({
      next: (response) => {
        this.submitted = true;
        this.loadDocuments();
        this.closeUpdateModal();
        this.getUsers()
      },
      error: (err) => {
        this.errorMessage = "Error al actualizar al usuario.";
      }
    })
    
  }
  deleteUser(id:number):void{
    this.userService.delete(id)
    .subscribe(
      response =>{
        this.getUsers();
      },
      error => {
        this.errorMessage="Error al eliminar un Usuario."
      }
    )
  }
}
