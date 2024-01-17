import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private data: string[] = [];

  addData(value: string): void {
    this.data.push(value);
  }
  deleteData(index: number): void {
    this.data.splice(index, 1);
  }

  getData(): string[] {
    return this.data;
  }

  toggler: boolean = false;
  togglers: boolean = false;
  togglerExit: boolean = false;

  todoList: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todoList.push(this.newTodo.trim());
      this.newTodo = '';
      this.togglerExit = true;
    }
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }
  constructor() {}
}
