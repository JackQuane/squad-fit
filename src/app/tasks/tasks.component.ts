import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  userData: any;
  exerciseData: any;

  constructor(
    public firebaseService: FirebaseService
  ) { }

  async ngOnInit() {
    //need to get exercise data this time
    //7 random rows, with specific squad num
    this.userData = await this.firebaseService.getUserData();
    this.exerciseData = await this.firebaseService.squadExerciseData2(this.userData.squadNum);

    // this.userData = await this.firebaseService.getSquadWeeklyExercises();

  }

  // formatData() {
  //   let list: string[][] = [];
  //   let userTestStatus: { age: number, avatar: string, completedTasks: string[], 
  //                         daysWeek: number, exerciseExperience: string, name: string, 
  //                         points: number, squadNum: number, surname: string, weight: number}[] = [];
   

  //   this.userData.forEach(element => {
  //     userTestStatus.push(element);
  //     console.log("Element: " + JSON.stringify(element));
  //   });

  //   this.userDataSource = new MatTableDataSource(userTestStatus);
  
  //   console.log("new format: " + userTestStatus);
  // }

  clickFunction() {
    let str = JSON.stringify(this.exerciseData)
    console.log(str);
  }

}
