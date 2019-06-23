import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs';
import { DatabaseOperationsService } from './database-operations.service';
import { Patient } from './patient';

import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  title = 'AngularUsers';
  patients : any;
  public currentDeletable = null;
  public currentEditPatient = null;
  public patientFormModalTitle = "Add Patient";
  

  constructor(private dataService: DatabaseOperationsService) {
    this.getPatients();
  }


  clearFields(){
    $("#exampleModal #patientName").val("");
    $("#exampleModal #patientEmail").val("");
    $("#exampleModal #patientPhone").val("");
    $("#exampleModal #patientGender").val("Male");
    $("#exampleModal #patientBloodgroup").val("A+");
  }


  setFields(modalId, name,email,phone,gender,bloodgroup){
    $(modalId + " #patientName").val(name);
    $(modalId + " #patientEmail").val(email);
    $(modalId + " #patientPhone").val(phone);
    $(modalId + " #patientGender").val(gender);
    $(modalId + " #patientBloodgroup").val(bloodgroup);
  }





  addPatient(){
    let patientName = $("#exampleModal #patientName").val();
    let patientEmail =  $("#exampleModal #patientEmail").val();
    let patientPhone = $("#exampleModal #patientPhone").val();
    let patientGender = $("#exampleModal #patientGender").val();
    let patientBloodgroup =  $("#exampleModal #patientBloodgroup").val();
    
    let patient = new Patient(patientName, patientGender, patientEmail, patientBloodgroup, patientPhone);
    this.dataService.addPatientToFirebase(patient);

    this.clearFields();
  }

  getPatients(){
    this.dataService.getPatientsFromFirebase().snapshotChanges().forEach(userSnapshot => {
      this.patients = [];
      userSnapshot.forEach(userSnapshot => {
        let patient = userSnapshot.payload.toJSON();
        patient['$key'] = userSnapshot.key;
        this.patients.push(patient);
      });
    });
  }

  deletePatient(patient){
    this.dataService.deletePatientFromFirebase(this.currentDeletable);
  }

  launchDeleteDialogue(patient){
    this.currentDeletable= patient['$key'];
  }

  setCurrentEditable(patient){
    this.currentEditPatient = patient;
    this.setFields("#editPatientModal", patient.name, patient.email, patient.phone, patient.gender, patient.bloodgroup);
  }

  updatePatient(){
    this.dataService.updatePatientFromFirebase(this.currentEditPatient);
  }

  ngOnInit() {
    // this.db.list('/users').snapshotChanges().subscribe(dataSnapshot =>{
    //   this.users = [];
    //   dataSnapshot.forEach(snapshot => {
    //     const item = snapshot.payload.toJSON();
    //     this.users.push(item);
    //     console.log(item);
    //   })
    // }
    // );
    // console.log(this.users);
  }
  

}
