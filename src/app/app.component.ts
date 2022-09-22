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


  colleccionDeUsuarios:User[] | undefined;
  
  constructor(private servicioUsuarios:UsuariosService,){
   
    this.servicioUsuarios.obtenerUsuarios().subscribe(usuario=>this.colleccionDeUsuarios=usuario)
  }

  usuarios=this.servicioUsuarios.obtenerUsuarios();
  // cafe:string []= [
  //   "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
  //    "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   ]

  cafe:String [] = [
    "https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2460822/pexels-photo-2460822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2460822/pexels-photo-2460822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  ngOnInit():void {

  }
  title = 'trabajo_practico';


   verificarUsuario(){
    if(this.usuario.valid){
      let nuevoUsuario:User={
        nombre:this.usuario.value.nombre!,
        contrasena:this.usuario.value.contrasena!,
        idusuario:this.usuario.value.idusuario!,
 
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
