import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  toggler: boolean = false;
  togglers: boolean = false;
  togglerExit: boolean = false;

  todoList: string[] = [];
  newTodo: string = '';

  currentDate!: Date;

  getCurrentDate(): void {
    this.currentDate = new Date();
  }

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
  ngOnInit(): void {
    this.getCurrentDate();
  }
}
