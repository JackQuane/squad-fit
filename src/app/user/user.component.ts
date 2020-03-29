import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../user.model';
import { ExerciseTableComponent } from '../exercise-table/exercise-table.component';
import { FirebaseService } from '../shared/services/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'page-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;
  userData: any;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    public firebaseAuth: AngularFireAuthModule
  ) {

  }

  async ngOnInit() {
    this.userData = await this.firebaseService.getUserData();
    var d = await this.firebaseService.getSquadWeeklyExercises();
    console.log("Exercises for this squad: " + d)
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  getUserSquadNum(){
    // FirebaseUser user = this.firebaseAuth.getInstance().getCurrentUser();
    // var d;

    // this.firebaseService.getUserData().then((docData) => {
    //   console.log("User Data : " );
    //   console.log(docData);
    //   d = docData;

    // })
    // console.log(this.userData.age);
    
    // this.firebaseService.getUsers().subscribe(data => console.log(data));
    // return userData;
    
    // this.firebaseService.writeNewFieldToCollectionDocs();
  }

}
