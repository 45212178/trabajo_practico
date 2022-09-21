import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
<<<<<<< HEAD
  getProductsSmall: any;
  obtenerUsuario() {
    throw new Error('Method not implemented.');
  }  
  
  private usuarioCollection:AngularFirestoreCollection <User>

  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('Usuarios')

   }
   obtenerUsuarios(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
  crearUsuario(nuevoUsuario:User){
    return new Promise(async(resolve, reject)=>{//retorna una nueva promesa, devolviendo un metodo asincrono
      try{// try = intentar 
        const id = this.db.createId() //se crea un id de la base de datos
        nuevoUsuario.idusuario = id;//el producto sera identificado por su id
        const resultado =await this.usuarioCollection.doc(id).set(nuevoUsuario);//el metodo await espera id del producto dentro del documento de la coleccion, dentro de una constante resultado
        resolve(resultado);//finaliza en un resultado
      }
  
        catch(error){// produce una respuesta si no funciona el metodo anterior
          reject(error);
        }
      })
    }
=======

  private usuarioCollection:AngularFirestoreCollection <User>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('Usuarios')
   }

   mostrarAlert(mensaje:string){
    alert(mensaje)
   }

   obtenerusuarios(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
crearUsuario(nuevoUsuario:User){
return new Promise(async(resolve, reject)=>{
  try{
    const id = this.db.createId()
    nuevoUsuario.idusuario = id;
    const resultado =await this.usuarioCollection.doc(id).set(nuevoUsuario);
    resolve(resultado);
  }

    catch(error){
      reject(error);
    }
  })
}
modificarUsuario(idusuario:string,nuevaData:User){
  return this.db.collection('usuarios').doc(idusuario).update(nuevaData)

 }

 eliminarUsuario(idusuario:string){
   return new Promise((resolve,reject)=>{
     try {
       const resp = this.usuarioCollection.doc(idusuario).delete()
       resolve(resp)
     }
     catch(error){
       reject(error)
     }
   })
 }
>>>>>>> 28e22d0ac5d868c39a8dfb7bfbdbd3ecf582c925
}
=======

  private usuarioCollection:AngularFirestoreCollection <User>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('Usuarios')
   }

   mostrarAlert(mensaje:string){
    alert(mensaje)
   }

   obtenerusuarios(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
crearUsuario(nuevoUsuario:User){
return new Promise(async(resolve, reject)=>{
  try{
    const id = this.db.createId()
    nuevoUsuario.idusuario = id;
    const resultado =await this.usuarioCollection.doc(id).set(nuevoUsuario);
    resolve(resultado);
  }

    catch(error){
      reject(error);
    }
  })
}
modificarUsuario(idusuario:string,nuevaData:User){
  return this.db.collection('usuarios').doc(idusuario).update(nuevaData)

 }

 eliminarUsuario(idusuario:string){
   return new Promise((resolve,reject)=>{
     try {
       const resp = this.usuarioCollection.doc(idusuario).delete()
       resolve(resp)
     }
     catch(error){
       reject(error)
     }
   })
 }
>>>>>>> 28e22d0ac5d868c39a8dfb7bfbdbd3ecf582c925
}
