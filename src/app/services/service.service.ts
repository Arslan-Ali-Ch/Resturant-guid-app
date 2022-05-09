import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  list;
  constructor(
    private firestore: AngularFirestore,
    private storage: Storage
  ) {
    this.storage.create();
  }
  addresturant(collection,record){
    return this.firestore.collection(collection).add(record);
   }
   getresturant(){
     return this.firestore.collection('Resturant').snapshotChanges();
   }

   getresturantbyid(collection,id){
     return this.firestore.collection(collection).doc(id).valueChanges();
   }
   editResturant(collection,id,record){
     return this.firestore.collection(collection).doc(id).update(record);
   }
   deletereas(collection,id){
    return this.firestore.collection(collection).doc(id).delete();

   }
}
