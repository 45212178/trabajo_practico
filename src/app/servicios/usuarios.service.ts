import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private Usuarios:User [];

  constructor() {

    this.Usuarios=[
    {
      nombreUsuario:"Daniela",
      contrasena:"1234",
      idUsuario:"usuario1"
    },
    {
      nombreUsuario:"Brisa",
      contrasena:"12345",
      idUsuario:"usuario2"
    },
    {
      nombreUsuario:"Gianina",
      contrasena:"123456",
      idUsuario:"usuario3"
    },
    {
      nombreUsuario:"Lucila",
      contrasena:"1234567",
      idUsuario:"usuario4"
    }
    ]

   }
   getUsuarios(){
    return this.Usuarios
   }
}
