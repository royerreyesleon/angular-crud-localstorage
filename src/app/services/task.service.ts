import { Injectable } from '@angular/core';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // tasks : Object[];
  tasks : Task[];

  constructor() {
    this.tasks = [
      // {title:'uno', description: 'uno', hide: true},
      // {title:'dos', description: 'dos', hide: true},
    ]
  }

  getTasks(){
    // return this.tasks;
    
    if (localStorage.getItem('tasks') === null) {
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }

  }

  addTask(task:Task){
    this.tasks.push(task);
    // return false;
    
    let tasks : Task[] = [];

    if (localStorage.getItem('tasks') === null) {
      tasks.push(task);
      // CONVERT ARRAY TO STRING WITH JSON.stringify 
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

  }

  deleteTask(task : Task){
    for (let i = 0; i < this.tasks.length; i++) {
      // const element = array[i];
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

      }
      
    }
  }

}
