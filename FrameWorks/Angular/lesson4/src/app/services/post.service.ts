import { Injectable } from '@angular/core';
import { IPost } from '../interfaces';
import { Post } from '../shemas';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: IPost[];
  constructor() {
    this.posts = [];
  }
  public add(
    title: string,
    value: string,
    description: string,
    checked: boolean
  ) {
    this.posts.push(
      new Post(title, value, description, this.posts.length, checked)
    );
  }
  public getAll() {
    return [...this.posts];
  }

  // public update(post: IPost) {
  //   const found = this.posts.find((p) => p.getId() === post.getId());
  //   found?.setTitle('found');
  // }

  deleteTask(taskToDelete: IPost) {
    const index = this.posts.indexOf(taskToDelete);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
