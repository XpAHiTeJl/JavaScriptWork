export interface ITask {
  id: string;
  title: string;
  description: string;
  status: 'To do' | 'In progress' | 'Done';
}

export interface Food {
  value: string;
  viewValue: string;
}
