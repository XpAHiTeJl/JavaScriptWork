import { TaskService } from './../task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  editing = false;
  editedTitle = '';

  task = this.taskservice.getTask();

  constructor(public taskservice: TaskService) {}

  deleteTask() {
    this.taskservice.deleteTask(this.task);
  }

  editTask() {
    this.editing = true;
    this.editedTitle = this.task.title;
  }

  saveTask() {
    if (this.editedTitle.trim() !== '') {
      this.task.title = this.editedTitle;
      this.editing = false;
    }
  }
}
