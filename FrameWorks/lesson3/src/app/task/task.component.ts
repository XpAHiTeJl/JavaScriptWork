import { TaskService } from './../task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  task: any;

  index: number = 0;
  title: string = '';

  constructor(public taskservice: TaskService) {}
  editTask() {
    this.taskservice.editTask(this.index, this.title);
  }
  deleteTask() {}
}
