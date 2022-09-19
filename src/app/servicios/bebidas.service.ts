import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Bebida } from '../models/bebida';
import { map } from 'rxjs';
import { async } from '@firebase/util';


@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  private coleccionBebida: AngularFirestoreCollection<Bebida> //ingreso a la collecion de Firestore de firebase la cual es llamada en el constructor

  constructor(private db: AngularFirestore) { //llama a la base de datos de firestore
    this.coleccionBebida = this.db.collection('Bebidas')// la collecionbebida creada es igual a la que es llamada anteriormente "Bebidas"(sacada de firestore)
  }
  //CRUD: Create, Read, Update, Delete

  getBebidas(){//
    return this.coleccionBebida.snapshotChanges().
    pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }
  createBebida(datosNuevaBebida:Bebida){
    return new Promise(async(resolve,reject)=>{
      try{

        const id =this.db.createId()
        datosNuevaBebida.idBebida= id
        const respuesta = await this.coleccionBebida.doc(id).set(datosNuevaBebida)
        resolve(respuesta)
      }
      catch(error){
        
      }
    })
  }
}
