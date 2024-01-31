import { IPost } from '../interfaces/';

export class Post implements IPost {
  private title: string;
  private value: string;
  private description: string;

  constructor(title: string, value: string, description: string) {
    this.title = title;
    this.value = value;
    this.description = description;
  }

  getTitle = (): string => {
    return this.title;
  };
  getValue = (): string => {
    return this.value;
  };
  getDescription = (): string => {
    return this.description;
  };

  setTitle = (title: string): void => {
    this.title = title;
  };
  setValue = (value: string): void => {
    this.value = value;
  };
  setDescription = (description: string): void => {
    this.description = description;
  };
}
