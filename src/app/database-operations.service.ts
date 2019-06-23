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

  

  addPatientToFirebase(patient){
    this.patientList.push(patient);
  }

  getPatientsFromFirebase() {
    return this.patientList;
  }

  updatePatientFromFirebase(patient){
    const key = patient.$key;
    delete patient.$key;
    
    this.patientList.update(key, patient);
  }

  deletePatientFromFirebase(key){
    this.patientList.remove(key);
  }

}
