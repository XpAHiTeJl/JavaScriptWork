export interface IPost {
  getTitle: () => string;
  getValue: () => string;
  getDescription: () => string;

  setTitle: (title: string) => void;
  setValue: (value: string) => void;
  setDescription: (description: string) => void;
}
