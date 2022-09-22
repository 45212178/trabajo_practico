import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  getProductsSmall: any;
  db: any;
  private usuarios:User[];
   obtenerUsuarios(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }

  private usuarioCollection:AngularFirestoreCollection <User>

  constructor(db: AngularFirestore) {
    this.usuarioCollection= db.collection('Usuarios')

    this.usuarios=[
      {nombre:"Gianis",contrasena:"gianis123",idusuario:"12324343"},
      {nombre:"Gianinna",contrasena:"gianinna123",idusuario:"1298839"},
      {nombre:"Lautaro",contrasena:"lautaro123",idusuario:"8239429"},
      ]

   }
   getUsers(){
    return this.usuarios;
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

}