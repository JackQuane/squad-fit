import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AfterViewInit, ViewChild } from "@angular/core";

export interface Exercise { name: string; technique: string; };

@Component({
  selector: 'app-exercise-table',
  templateUrl: './exercise-table.component.html',
  styleUrls: ['./exercise-table.component.css']
})
export class ExerciseTableComponent implements AfterViewInit {

  _db:AngularFirestore;
  exercises:  Observable<any[]>;
  //
  displayedColumns = ['name', 'technique', 'difficulty'];
  dataSource: MatTableDataSource<any>; 

  @ViewChild(MatSort, null) sort: MatSort;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore, dialog: MatDialog) {
    this.afAuth.auth.signInAnonymously();
    this.exercises = db.collection('exercises').valueChanges();
    this._db = db;
  }

  ngAfterViewInit() {
    this._db.collection<any>('exercises').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
    })
  }

  
}
