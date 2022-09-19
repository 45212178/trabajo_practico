import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bebida } from 'src/app/models/bebida';
import { User } from 'src/app/models/user';
import { BebidasService } from 'src/app/servicios/bebidas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   
  formularioBebidas = new FormGroup({
    tipo: new FormControl('',Validators.required),
    marca: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    litros: new FormControl(0,Validators.required)
  })

  formularioVisible:boolean=false

  constructor(private servicio:UsuariosService,private servicioBebidas:BebidasService) { }

  misUsuarios: User[] = [];

  coleccionDeBebidas: Bebida[] = [];

  ngOnInit(): void {
    this.misUsuarios = this.servicio.getUsuario()
    this.obtenerBebidas ()
  }

  obtenerBebidas(){
      this.servicioBebidas.getBebidas().subscribe((bebida)=>{
      this.coleccionDeBebidas = bebida
    })
  }
  agregarBebida(){
    let datosBebida:Bebida = {
      
      tipo:this.formularioBebidas.value.tipo!,
      marca:this.formularioBebidas.value.marca!,
      precio:this.formularioBebidas.value.precio!,
      litros:this.formularioBebidas.value.litros!,
      idBebida:""
    }

    if (this.formularioBebidas.valid) {
        this.servicioBebidas.createBebida(datosBebida).
        then(resp=>{
        alert ("Bebida agregada con exito")
      })
      .catch(err=>{
        alert("No se pudo agregar la bebida\nError: "+err)
      })
    this.formularioVisible = false
    this.formularioBebidas.reset()
    }

    else{
      alert("Hay campos vacios")
    }
  }
  mostrarAgregar(){
this.formularioVisible = true
  }
}