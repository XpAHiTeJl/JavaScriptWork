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
  public add(title: string, value: string, description: string) {
    this.posts.push(new Post(title, value, description));
  }
  public getAll() {
    return [...this.posts];
  }
}
