import { Injectable } from '@angular/core';
import { task } from './interaface/interface';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: task[] = [
    {
      title: '',
      createdOn: new Date(),
    },
  ];

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
