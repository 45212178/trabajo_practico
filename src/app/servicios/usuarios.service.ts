import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

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
}
