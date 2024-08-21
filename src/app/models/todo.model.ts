export interface ToDo {
  id: string;
  title: string;
}

export interface Column {
  title: string;
  todos: ToDo[];
}

export interface InputData {
  todo: ToDo;
}

export interface OutPutData {
  rta: boolean;
}
