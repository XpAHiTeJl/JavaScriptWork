import { Injectable } from '@angular/core';
import { IPost } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private posts: IPost[] = [
    {
      id: 0,
      title: 'About bad written text.(c) Mihail',
      description: "There is Mihail and seems he doesn't like a text which...",
    },
  ];

  constructor() {}

  public getPosts(): IPost[] {
    return this.posts;
  }

  public addPost(newPost: IPost): void {
    this.posts.push(newPost);
  }
}
