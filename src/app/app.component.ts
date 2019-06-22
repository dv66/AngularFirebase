import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs';
import { DatabaseOperationsService } from './database-operations.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  title = 'AngularUsers';
  users : AngularFireList<any>;
  

  constructor(private dataService: DatabaseOperationsService) {
    
  }

  addUser(){
    let auser = { name: "asfb", dept: "cse"};
    this.dataService.addUserToFirebase(auser);
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
