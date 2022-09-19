import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Producto} from '../models/producto';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  obtenerProducto() {
    throw new Error('Method not implemented.');
  }
  obtenerproductos() {
    throw new Error('Method not implemented.');
  }
private productoCollection:AngularFirestoreCollection <Producto>
  constructor(private db: AngularFirestore) { 

    this.productoCollection= db.collection('cafeteria')//ingresa a la coleccion de firebase "cafeteria"
    
  }
  obtenerProductos(){
      return this.productoCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
      
    }//retorna de la collecion 
  crearProducto(nuevoProducto:Producto){
  return new Promise(async(resolve, reject)=>{//retorna una nueva promesa, devolviendo un metodo asincrono
    try{// try = intentar 
      const id = this.db.createId() //se crea un id de la base de datos
      nuevoProducto.idProducto = id;//el producto sera identificado por su id
      const resultado =await this.productoCollection.doc(id).set(nuevoProducto);//el metodo await espera id del producto dentro del documento de la coleccion, dentro de una constante resultado
      resolve(resultado);//finaliza en un resultado
    }

      catch(error){// produce una respuesta si no funciona el metodo anterior
        reject(error);
      }
    })
  }

  modificarProducto(idProducto:string,nuevaData:Producto){ //la funciona modifica al producto por medio del id lo identifica y se ingresa la nueva info por nuevaData
   return this.db.collection('cafeteria').doc(idProducto).update(nuevaData)
  //retorna de la coleccion cafeteria, el documento identificado por el id del producto, actualizado con una nueva data/info
  }

  eliminarProducto(idProducto:string){//la funcion elimina al producto por medio del id
    return new Promise((resolve,reject)=>{ //crea una nueva promesa 
      try {// se intenta eliminar el producto seleccionado (identificado por el idProducto)dentro del documento de la coleccion
        const resp = this.productoCollection.doc(idProducto).delete()// es guardado en una constante resp
        resolve(resp);// da como respuesta dicha constante
      }
      catch(error){ //en caso de que no funcione devuelve un error
        reject(error);
      }
    })
  }
}
