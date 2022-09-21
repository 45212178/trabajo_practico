import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { User } from 'src/app/models/user';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  modalVisible:boolean=false;

  
  coleccionDeUsuarios: User[] = [];


  [x: string]: any;
  
  //declaramos items en menuIten (poniendolo en un arreglo vacio) y lo importamos
  items: MenuItem[] = [];

  usuario = new FormGroup({
    nombreuser: new FormControl('',Validators.required),
    contrasena: new FormControl('',Validators.required),
    idUsuario: new FormControl('',Validators.required)
  })
  

  constructor(private servicioUsuarios:UsuariosService,private servicio2:UsuariosService) {

  }
  
  adminVisible=false;
  ngOnInit(): void {
    //llamamos items 
    this.items = [
      {
        label:'Home',
        // label representa una etiqueta para un elemento en una interfaz de usuario. 
        //Este nos muestra el nombre del control con el que va asociado, y el texto a mostrar. 
        icon:"pi pi-home",
        //Icon es la representacion grafica que se muestra en el servidor
        routerLink:"home"
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
        routerLink:"admin",
        visible:this.adminVisible
      },
      
    ]
    this.servicioUsuarios.obtenerusuarios().subscribe(usuario=>this.coleccionDeUsuarios=usuario)
  }


  textoBoton!: string;

  agregarUsuario(){
    if(this.usuario.valid){
      let nuevoUsuario:User={
        nombre:this.usuario.value.nombreuser!,
        contrasena:this.usuario.value.contrasena!,
        idusuario:""
        
      }
      this.servicioUsuarios.crearUsuario(nuevoUsuario).then((usuario)=>{
        alert("El usuario fue agregado con exito")
        })
        .catch((error)=>{
        alert("El usuario no pudo ser cargado\nError: "+error);
        })
    }else{
      alert("El formulario no esta completo")
    }
  }

  // verificarUsuario(){
  //   this.usuario.forEach(coleccionDeUsuarios =>{
  //     if(usuario.nombre=="Gianis"){
  //       if(usuario.contrasena=="gianis123"){
  //         this.adminVisible=true;
  //         alert("Inicio sesion correctamente")
  //         this.ngOnInit()
  //       }
  //     }
  //   })
  //  }
  imprimirTexto(item:string){
    alert(item)
  }


  mostrarDialogo(){
    this.textoBoton ="Agregar"
    this.modalVisible=true;
  }


    mostrar(){
    this.servicio2.mostrarAlert("Bienvenido, iniciaste sesiòn")
    this.adminVisible=true;
    }
}
