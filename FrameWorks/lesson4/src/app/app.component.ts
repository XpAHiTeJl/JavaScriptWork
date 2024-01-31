import { Component } from '@angular/core';
import { PostService } from '../app/services/post.service';
import { IPost } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private postService: PostService) {}
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
  }

  onSubmitHandler(data: any) {
    this.postService.add(data.title, data.formselect, data.description);
    console.log(this.getPosts());
  }
  getPosts() {
    return this.postService.getAll();
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
