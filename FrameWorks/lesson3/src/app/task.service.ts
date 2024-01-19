import { Injectable } from '@angular/core';
import { task } from './interaface/interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: task = { title: '', createdOn: new Date() };

  tasks: task[] = [
    {
      title: '',
      createdOn: new Date(),
    },
  ];

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
    const foundindex = this.tasks.findIndex((t) => t.title === title);

    this.tasks[index].title = title;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

// public editTodo(
// todoId: number,
//     editedTodoDesc: string,
//     editedTodoStatus: any
//   ) {
//     const foundIndex = this.todoList.findIndex((t) => t.id === todoId);

//     if (foundIndex !== -1) {
//       this.todoList[foundIndex].description = editedTodoDesc;
//       this.todoList[foundIndex].status = editedTodoStatus;
//     }
//   }
