import { Todo } from "domain";
import { TodoRepository } from "./repository";

export default class TodoUsecase {
  constructor(private todoRepo: TodoRepository) {}

  findAll(): Todo[] {
    return this.todoRepo.findAll();
  }

  add(text: string) {
    this.todoRepo.add(text);
  }

  edit(id: string, text: string) {
    this.todoRepo.edit(id, text);
  }

  finish(id: string) {
    this.todoRepo.delete(id);
  }

  finishAll() {
    this.todoRepo.deleteAll();
  }
}
