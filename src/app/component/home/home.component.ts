import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/models/producto';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagen!: string; //url

  producto = new FormGroup({
    Nombre: new FormControl('',Validators.required),
    Tipo: new FormControl('',Validators.required),
    Descripcion: new FormControl('',Validators.required),
    Precio: new FormControl('',Validators.required),
    idProducto: new FormControl('',Validators.required)
  })
  productoSeleccionado!: Producto;

  modalVisible:boolean=false;

  eliminarVisible!: boolean;
  
  colleccionDeProductos!: Producto[];
  constructor(private servicioProducto:ProductoService,private servicioProductos:ProductoService) { 
    
  }
  cafe:string []= [
    "http://localhost:4200/assets/pexels-inicio.jpeg",
    "http://localhost:4200/assets/pexels-nosotros.jpg",
    "http://localhost:4200/assets/pexels-davide-baraldi-1739748.jpg"
  ]
  adminVisible=false;
  ngOnInit(): void {
    this.servicioProductos.obtenerProducto().subscribe((producto: Producto[])=>this.colleccionDeProductos=producto)
  }
  textoBoton!: string;

  agregarProducto(){
    if(this.producto.valid){
      let nuevoProducto:Producto={
        Nombre:this.producto.value.Nombre!,
        Tipo:this.producto.value.Tipo!,
        Descripcion:this.producto.value.Descripcion!,
        Precio:this.producto.value.Precio!,
        idProducto:""
        
      }
      this.servicioProductos.crearProducto(nuevoProducto).then((producto)=>{
        alert("El producto fue agregado con exito")
        })
        .catch((error)=>{
        alert("El producto no pudo ser cargado\nError: "+error);
        })
    }else{
      alert("El formulario no esta completo")
    }
  }
  editarProducto(){
    let datos:Producto={
      Nombre:this.producto.value.Nombre!,
      Tipo:this.producto.value.Tipo!,
      Descripcion:this.producto.value.Descripcion!,
      Precio:this.productoSeleccionado.Precio!,
      idProducto:this.productoSeleccionado.idProducto!,
    }
    this.servicioProductos.modificarProducto(this.productoSeleccionado.idProducto,datos).then((producto)=>{
      alert("El producto fue agregado con exito")
    })
    .catch((error)=>{
      alert("El producto no pudo ser modificado\nError: "+error);
    })
}
mostrarEditar(productoSeleccionado:Producto){
  this.productoSeleccionado =productoSeleccionado
  this.textoBoton="Editar Producto"
  this.modalVisible=true;

  this.producto.setValue({
      Nombre:productoSeleccionado.Nombre,
      Tipo:productoSeleccionado.Tipo,
      Descripcion:productoSeleccionado.Descripcion,
      Precio:productoSeleccionado.Precio,
      idProducto:productoSeleccionado.idProducto
    })
}

cargarDatos(){
  if(this.textoBoton==="Agregar Producto"){
    this.agregarProducto()
  }
  else if(this.textoBoton==="Editar Producto"){
    this.editarProducto()
  }
  this.modalVisible=false
  this.producto.reset()
}

mostrarEliminar(productoSeleccionado:Producto){
  this.eliminarVisible=true
}

borrarProducto(){
  this.servicioProductos.eliminarProducto(this.productoSeleccionado.idProducto).then((resp)=>{
    alert("El prducto fue eliminado con exito")
  })
  .catch((error)=>{
    alert("El producto no pudo ser eliminado\nError: "+error)
  })
  this.eliminarVisible=false
}


cargarImagen(event:any){
  let archivo =event.target.files[0]
  let reader = new FileReader()
  if(archivo!=undefined){//si mi archivo es diferente a undefined
    reader.readAsDataURL(archivo)//lee el archivo y lo convierte en una url
    reader.onloadend = () =>{//cuando finaliza la carga
      let url = reader.result //me devuelve el resultado (url)
      if(url!=null){ //si la url es distinta de nula
       this.imagen =url.toString()
      }
    }
}
}
}
