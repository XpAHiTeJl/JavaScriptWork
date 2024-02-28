import { Injectable } from '@angular/core';
import { task } from './interaface/interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: task = { title: '', createdOn: new Date() };
  tasks: task[] = [];

  getTask(): task {
    return this.task;
  }

  addTask(title: string) {
    this.task = {
      title: title,
      createdOn: new Date(),
    };
    this.tasks.push(this.task);
  }

  getTasks() {
    return this.tasks;
  }

  editTask(index: number, title: string) {
    this.tasks[index].title = title;
  }

  deleteTask(taskToDelete: any) {
    const index = this.tasks.indexOf(taskToDelete);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
