import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputText: string = '';
  selectedValue: string = '';
  inputTextarear: string = '';

  todoList: string[] = [];

  onButtonClick() {
    this.todoList.push(this.inputText);
    this.todoList.push(this.selectedValue);
    this.todoList.push(this.inputTextarear);
    this.selectedValue = '';
    this.inputText = '';
    this.inputTextarear = '';
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
