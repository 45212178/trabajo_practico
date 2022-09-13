import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { User } from 'src/app/models/user';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  [x: string]: any;

  items: MenuItem[] = [];

  usuarios: User [] = [];

  adminVisible:boolean= false

  constructor(private servicioUsuario: UsuariosService) { }

  

  ngOnInit(): void {
    this.items = [
      {
        label:"Home",
        icon:"pi pi-home",
        routerLink:"/"
      },
      {
        label:"Menu",
        icon:"pi pi-list",
        items:[
          {
            label:"Bebidas",
            routerLink:"bebidas"
          },
          {
            label:"Comidas",
            routerLink:"comidas"
          }
        ]
      },
      {
        label:"Contactos",
        icon:"pi pi-phone",
        routerLink:"contactos"
      },
      {
        label:"Admin",
        icon:"pi pi-user-plus",
        routerLink:"Adin",
        visible:this.adminVisible
      },
      
    ]
  }

  iniciaSesion(){
    let esteUsuario: User={
      nombreUsuario:"Brisa_Lopez",
      contrasena:"lopez",
      idUsuario:"usuario1"
    }
    this['usuarios'].forEach ((usu: { nombreUsuario: string; contrasena: string; })=> {
      if(usu.nombreUsuario === esteUsuario.nombreUsuario){
        if(usu.contrasena === esteUsuario.contrasena){
          this.adminVisible = true
        }
        else(
          alert("La contraseña es incorrecta")
        )
      }
      
    });
    this.ngOnInit()
  }
}
