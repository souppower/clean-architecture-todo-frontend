import { Todo } from "domain";

import { TodoRepository as ITodoRepository } from "usecase/repository";
import Persistor from "./persistor";

export default class TodoRepository implements ITodoRepository {
  constructor(private persistor: Persistor) {}

  findAll(): Todo[] {
    return this.persistor.getAll();
  }

  add(text: string) {
    const key = Math.floor(Math.random() * 10000);
    const todo = {
      id: key,
      title: text
    };
    this.persistor.save(todo);
  }

  edit(id: string, text: string) {
    const todo = this.persistor.get(`${id}`);
    this.persistor.save({ ...todo, text });
  }

  delete(id: string) {
    const todo = this.persistor.get(`${id}`);
    this.persistor.delete(id);
  }

  deleteAll() {
    this.persistor.clear();
  }
}
