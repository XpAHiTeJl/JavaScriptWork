import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  toggler: boolean = false;
  togglerExit: boolean = false;
  textareaVisible: boolean = false;

  todoList: string[] = [];
  newTodo: string = '';
  textareaValue: string = '';
  messages: string[] = [];
  newMessage: string = '';

  isFocused: boolean = false;
  placeholderText: string = 'Введите сообщение...';

  onFocus() {
    this.isFocused = true;
    this.placeholderText = '';
  }

  onBlur() {
    this.isFocused = false;
    this.placeholderText = 'Введите сообщение...';
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }

  toggleTextarea() {
    this.textareaVisible = !this.textareaVisible;
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

  genders = ['male', 'female', 'others'];
  ngOnInit(): void {}
}
