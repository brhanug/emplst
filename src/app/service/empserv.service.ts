import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpservService {

  constructor(public fireservice: AngularFirestore) { }
  create_NewEmploye(record: any){
    return this.fireservice.collection('Employe').add({record}); 
  }

  get_allemp(){
    return this.fireservice.collection('Employe').snapshotChanges().pipe()
  }
}
