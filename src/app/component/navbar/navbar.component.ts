import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    contrasena: new FormControl('',Validators.required),
  })

  eliminarVisible!: boolean;
  modalVisible:boolean=false;

  colleccionDeUsuarios: User[]=[];

  usuarioSeleccionado!:User;

  [x: string]: any;
  
  //declaramos items en menuIten (poniendolo en un arreglo vacio) y lo importamos
  items: MenuItem[] = [];

  constructor(private servicioUsuarios:UsuariosService) {

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
        visible: this.adminVisible
      },
      
    ]
    this.servicioUsuarios.obtenerUsuarios().subscribe(usuario=>this.colleccionDeUsuarios=usuario)
  }
 textoBoton!: string;

  verificarUsuario(){
    let datos:User={
      nombre:this.usuario.value.nombre!,
      contrasena:this.usuario.value.contrasena!,
      idusuario:this.usuarioSeleccionado.idusuario
    }
    this.servicioUsuarios.modificarUsuario(this.usuarioSeleccionado.idusuario,datos).then((usuario)=>{
      alert("Bienvenido, iniciaste sesion")
    })
    .catch((error)=>{
      alert("Hubo un problema para iniciar sesion")
    })
  }

  
agregarUsuario(){
    if(this.usuario.valid){
      let nuevoUsuario:User={
        nombre:this.usuario.value.nombre!,
        contrasena:this.usuario.value.contrasena!,
        idusuario:""
        
      }
      this.servicioUsuarios.crearUsuario(nuevoUsuario).then((usuario)=>{
        alert("El usuario fue agregado con exito")
        this.adminVisible=true
        })
        .catch((error)=>{
        alert("El usuario no pudo ser cargado\nError: "+error);
        })
    }else{
      alert("El formulario no esta completo")
    }
  }
  mostrarEditar(usuarioSeleccionado:User){
    this.usuarioSeleccionado =usuarioSeleccionado
    this.textoBoton="Iniciar Sesion"
    this.modalVisible=true;
  
    this.usuario.setValue({
        nombre:usuarioSeleccionado.nombre,
        contrasena:usuarioSeleccionado.contrasena
      })
  }
  mostrarDialogo(){
    this.textoBoton ="Iniciar Sesion"
    this.modalVisible=true
    this.adminVisible=true
    this.ngOnInit()
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Usuario"){
      this.verificarUsuario()
    }
    else if(this.textoBoton==="Editar usuario"){
      this.agregarUsuario()
    }
    this.modalVisible=false
    this.usuario.reset()
  }
}
