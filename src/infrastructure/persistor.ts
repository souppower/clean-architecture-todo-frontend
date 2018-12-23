import Persistor from "interface/repository/persistor";

export default class Store {
  constructor(private store: Persistor) {}

  get(key: string) {
    return this.store.get(key);
  }

  getAll() {
    return this.store.getAll();
  }

  save(value: any) {
    this.store.save(value);
  }

  delete(id: string) {
    this.store.delete(id);
  }

  clear() {
    this.store.clear();
  }
}
