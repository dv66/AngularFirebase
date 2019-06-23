import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {


  patientList : AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { 
    this.patientList = this.db.list('patients');
  }

  getPatientsFromFirebase() {
    return this.patientList;
  }

  addPatientToFirebase(user){
    this.patientList.push(user);
  }

}
