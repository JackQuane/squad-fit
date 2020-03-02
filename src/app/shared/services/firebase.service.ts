import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }

  // getUsers(){
  //   return this.db.collection('users').snapshotChanges();
  // }

  getUserData(){
    // var dbRef =  this.db.collection('users').doc(firebase.auth().currentUser.uid).snapshotChanges().subscribe(data => console.log(data));
    // console.log("getUserData");
    // var x = 897;
   var  x = this.db.collection('users').doc(firebase.auth().currentUser.uid).ref.get().then(function(doc) {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    // x = doc.data();
                    return doc.data();
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

    return x;

    // return dbRef;
    // .pipe(map((response: any) => response.json()));
    // return firebase.auth().currentUser.uid;
  }

  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value, avatar){

    var sNum: number = this.assignSquadNum(value);
    console.log(sNum);

    return this.db.collection('users').doc(firebase.auth().currentUser.uid).set({
      name: value.name,
      // nameToSearch: value.name.toLowerCase()
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar,
      weight: parseInt(value.weight),
      exerciseExperience: value.exerciseExperience,
      daysWeek: value.daysWeek,
      points: 0,
      squadNum: this.assignSquadNum(value),
      completedTasks: [null]
    });

  }

  assignSquadNum(value){
      var exp: string = value.exerciseExperience;
      var daysWk: number = value.daysWeek;
      var squadNum: number;

      if(exp == "none" && daysWk < 4){
        squadNum = 1;
        console.log(squadNum);
      } else if (exp == "some" && daysWk < 6){
        squadNum = 2;
        console.log(squadNum);
      } else if (exp == "loads"){
        squadNum = 3;
        console.log(squadNum);
      }
      return squadNum;
  }

//   writeNewFieldToCollectionDocs() {
      
//     for (let i=0; i<75; i++) {
//       this.db.collection('exercises').doc('i').update({
//           difficulty: 0
//       })
//           .then(function () {
//               console.log("Document successfully updated!");
//           }).catch(function (error) {
//               console.error("Error removing document: ", error);

//           });
//     }


// }


}
  