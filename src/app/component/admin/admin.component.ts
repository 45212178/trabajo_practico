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
   

  constructor() { }



  ngOnInit(): void {
   
  }

  
}