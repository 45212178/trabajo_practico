import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  constructor( ) { }

  

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
        routerLink:"Adin",
      },
      
    ]
   
  }

 
}
