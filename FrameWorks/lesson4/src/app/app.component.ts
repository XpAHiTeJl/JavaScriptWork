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

  onSubmitHandler(form: any) {
    const data = form.value;
    this.postService.add(
      data.title,
      data.formselect,
      data.description,
      data.checked
    );
    console.log(this.getPosts());
    form.reset();
  }
  getPosts() {
    return this.postService.getAll();
  }
  update(post: IPost) {
    // todo открытие модального окна, по килку кнопки  апдейт в модальном окне будет вызываться postservice.update и будут передаваться новые значениея полей и post
  }
  deleteTask(post: IPost) {
    this.postService.deleteTask(post);
  }
}
// this.postService.update(post);
