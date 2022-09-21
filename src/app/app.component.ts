import { Component,OnInit } from '@angular/core';
import { UsuariosService } from './servicios/usuarios.service';
import { User } from './models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    contrasena: new FormControl('',Validators.required),
    idusuario: new FormControl('',Validators.required)
  })

  modalVisible:boolean=false;

  eliminarVisible:boolean;

  colleccionDeUsuarios:User[];
  constructor(private servicioUsuarios:UsuariosService){
    this.servicioUsuarios.obtenerUsuarios().subscribe(user=>this.colleccionDeUsuarios=user)
  }
  usuarios=this.servicioUsuarios.obtenerUsuarios();
  // cafe:string []= [
  //   "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
  //    "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   ]
  ngOnInit():void {

  }
  title = 'trabajo_practico';


   verificarUsuario(){
    if(this.user.valid){
      let nuevoUsuario:User={
        Nombre:this.User.value.nombre!,
        Contrasena:this.User.value.contrasena!,
        idUsuario:this.User.value.idusuario!,
 
      }
      this.servicioUsuarios.crearUsuario(nuevoUsuario).then((usuario)=>{
        alert("Bienvenido, iniciaste sesion")
        this.ngOnInit()
      })
      .catch((error)=>{
        alert("No se pudo iniciar sesion")
      })
      
      }
  }


  
}
