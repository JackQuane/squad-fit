import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  userData: any;
  exerciseData: any;
  toDoListArray: any[];
  displayedColumns = ['name', 'technique', 'difficulty', 'actions'];
  dataSource: MatTableDataSource<any>; 

  constructor(
    public firebaseService: FirebaseService
  ) { }

  async ngOnInit() {
    //need to get exercise data this time
    //7 random rows, with specific squad num
    this.userData = await this.firebaseService.getUserData();
    this.exerciseData = await this.firebaseService.squadExerciseData2(this.userData.squadNum);

    this.dataSource = new MatTableDataSource(this.exerciseData); 
      // this.dataSource.sort = this.sort;

    // this.userData = await this.firebaseService.getSquadWeeklyExercises();
    // this.firebaseService.getToDoList().snapshotChanges()
    // .subscribe(item => {
    //   this.toDoListArray = [];
    //   item.forEach(element => {
    //     var x = element.payload.toJSON();
    //     x["$key"] = element.key;
    //     this.toDoListArray.push(x);
    //   })

    //   //sort array isChecked false  -> true
    //     this.toDoListArray.sort((a,b) => {
    //       return a.isChecked - b.isChecked;
    //     })
    // });
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

  completeTask(exerciseName) {
    // let str = JSON.stringify(this.exerciseData)
    // console.log(str);

    // each time this is clicked I need to add +1 to points
    // I need only around 4 exercises and they need to be random

    //I also need to add the name of the exercise to the 'completedTasks'
    this.firebaseService.addPointToUser(this.userData.points, this.userData.completedTasks, exerciseName);
    console.log(exerciseName);
  }

  // onAdd(itemTitle) {
  //   this.firebaseService.addTitle(itemTitle.value);
  //   itemTitle.value = null;
  // }

  // alterCheck($key: string,isChecked) {
  //   this.firebaseService.checkOrUnCheckTitle($key,!isChecked);
  // }

  // onDelete($key : string){
  //   this.firebaseService.removeTitle($key);
  // }

}
