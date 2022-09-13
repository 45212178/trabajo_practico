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

    this.productoCollection= db.collection('cafeteria')
    
  }
  obtenerProductos(){
      return this.productoCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
      
    }
  crearProducto(nuevoProducto:Producto){
  return new Promise(async(resolve, reject)=>{
    try{
      const id = this.db.createId()
      nuevoProducto.idProducto = id;
      const resultado =await this.productoCollection.doc(id).set(nuevoProducto);
      resolve(resultado);
    }

      catch(error){
        reject(error);
      }
    })
  }

  modificarProducto(idProducto:string,nuevaData:Producto){
   return this.db.collection('cafeteria').doc(idProducto).update(nuevaData)

  }

  eliminarProducto(idProducto:string){
    return new Promise((resolve,reject)=>{
      try {
        const resp = this.productoCollection.doc(idProducto).delete()
        resolve(resp)
      }
      catch(error){
        reject(error)
      }
    })
  }
}
