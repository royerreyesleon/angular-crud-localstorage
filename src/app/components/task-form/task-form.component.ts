import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  // constructor() { }
  constructor(
    public taskservice: TaskService
  ) {

  }

  ngOnInit(): void {
  }

  addTask(newTitle : HTMLInputElement, newDescription: HTMLInputElement){
    // console.log(newTitle);
    // console.log(newTitle.value, newDescription.value);
    
    this.taskservice.addTask({
      title       : newTitle.value,
      description : newDescription.value,
      hide        : true
    });

    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus();

    // console.log(this.taskservice.getTasks());
    

    return false;
  } 

}
