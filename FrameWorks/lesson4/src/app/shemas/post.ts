import { IPost } from '../interfaces/';

export class Post implements IPost {
  private title: string;
  private value: string;
  private description: string;
  private id: number;

  constructor(title: string, value: string, description: string, id: number) {
    this.title = title;
    this.value = value;
    this.description = description;
    this.id = id;
  }
  getId = (): number => {
    return this.id;
  };

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
