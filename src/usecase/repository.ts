import { Todo } from "domain";

export interface TodoRepository {
  findAll(): Todo[];
  add(text: string): void;
  edit(id: string, text: string): void;
  delete(id: string): void;
  deleteAll(): void;
}
