import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  toggler: boolean = false;
  togglerMessage: boolean = false;
  togglerExit: boolean = false;
  textareaVisible: boolean = false;
  textmessageVisible: boolean = false;
  isFocused: boolean = false;

  todoList: string[] = [];
  newTodo: string = '';
  textareaValue: string = '';
  messages: string[] = [];
  newMessage: string = '';
  newMessagePrivat: string = '';

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
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
  toogleMessages() {
    this.textmessageVisible = !this.textmessageVisible;
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

  ngOnInit(): void {}
}
