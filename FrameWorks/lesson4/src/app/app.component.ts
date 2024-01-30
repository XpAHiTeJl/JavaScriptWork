import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  checked = false;
  indeterminate = false;

  inputText: string = '';
  selectedValue: string = '';
  inputTextarear: string = '';

  todoList: string[] = [];
  todoListValue: string[] = [];
  todoListTextarear: string[] = [];

  onButtonClick() {
    this.todoList.push(this.inputText);
    this.todoListValue.push(this.selectedValue);
    this.todoListTextarear.push(this.inputTextarear);
    this.selectedValue = '';
    this.inputText = '';
    this.inputTextarear = '';

    if (this.checked === false) {
      this.indeterminate = true;
    }
  }

  onSubmitHandler(data: any) {
    console.log(data);
    if (data.checked) {
      console.log('qwedasdfa');
    }
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
