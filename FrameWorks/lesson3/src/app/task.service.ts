import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = [];

  addTask(title: string) {
    const task = {
      title,
      createdOn: new Date(),
    };
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  editTask(index: number, title: string) {
    this.tasks[index].title = title;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
