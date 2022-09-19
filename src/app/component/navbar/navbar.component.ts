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
  
  //declaramos items en menuIten (poniendolo en un arreglo vacio) y lo importamos
  items: MenuItem[] = [];
  //declaramos usuarios en user (lo ponemos en un arreglo vacio ) y lo importamos
  usuarios: User [] = [];
  //declaramos que la variable es falsa
  adminVisible:boolean= false

  constructor(private servicioUsuario: UsuariosService) { }

  

  ngOnInit(): void {
    //llamamos items 
    this.items = [
      {
        label:'Home',
        // label representa una etiqueta para un elemento en una interfaz de usuario. 
        //Este nos muestra el nombre del control con el que va asociado, y el texto a mostrar. 
        icon:"pi pi-home",
        //Icon es la representacion grafica que se muestra en el servidor
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
          },
          {
            label:"Tortas",
            routerLink:"tortas"
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
    this.usuarios= this.servicioUsuario.getUsuarios()
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
