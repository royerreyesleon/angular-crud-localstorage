import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../models/Task';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // THIS COMPONENT HAVE A ENTRY WHIT NAME task GET ATRIBUTTES OF CLASS TASK.
  @Input() task: Task 

  // constructor() { }
  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  deleteTask(task : Task){
    if (confirm('Are you sure you want to delete it?')) {
      this.taskService.deleteTask(task);
    }
  }

}
