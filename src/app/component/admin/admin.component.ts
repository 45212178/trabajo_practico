import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  colleccionDeProductos!: Producto[];
  constructor(private productoServicio: ProductoService) { }

  producto=this.productoServicio.obtenerProductos();


  ngOnInit(): void {
    this.productoServicio.obtenerProductos().subscribe((producto: Producto[])=>this.colleccionDeProductos=producto)
  }

  
}