import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {


  userList : AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { 
    this.userList = this.db.list('users');
  }

  getUsersFromFirebase() {
    return this.userList;
  }

  addUserToFirebase(user){
    this.userList.push(user);
  }

}
