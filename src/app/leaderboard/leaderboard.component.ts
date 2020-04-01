import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  userData: any;
  userDataSource: any;
  displayedColumns: string[] = ["name", "points", "squadNum"];
  @ViewChild(MatSort, null) sort: MatSort;
//  userDataSource: number[] = [
//   8, 9, 7, 6, 7
// ];

  constructor(public firebaseService: FirebaseService) { }

  async ngOnInit() {
    // this.userData = await this.firebaseService.getUserData();
    //make new method that gets all users data
    this.userData = await this.firebaseService.allUserData();
    console.log(this.userData);
    this.formatData();
  }

  formatData() {
    let list: string[][] = [];
    let userTestStatus: { age: number, avatar: string, completedTasks: string[], 
                          daysWeek: number, exerciseExperience: string, name: string, 
                          points: number, squadNum: number, surname: string, weight: number}[] = [];
   

    this.userData.forEach(element => {
      userTestStatus.push(element);
      console.log("Element: " + JSON.stringify(element));
    });

    this.userDataSource = new MatTableDataSource(userTestStatus);
    this.userDataSource.sort = this.sort;
  
    console.log("new format: " + userTestStatus);
  }




}
