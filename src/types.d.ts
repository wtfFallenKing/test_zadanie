export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

export type IFilter = "all" | "active" | "completed";