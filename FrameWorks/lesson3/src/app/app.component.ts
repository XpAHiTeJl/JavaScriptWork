import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  getTasks() {
    return this.taskService.getTasks();
  }
}
