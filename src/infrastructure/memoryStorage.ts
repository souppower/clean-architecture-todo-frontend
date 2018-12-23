class MemoryStorage {
  private cached: { [key: string]: { key: string; value: string } };

  constructor() {
    this.cached = {};
  }

  get(id: string) {
    return this.cached[id];
  }

  getAll() {
    return Object.values(this.cached);
  }

  save(id: string, value: any) {
    this.cached[id] = { key: id, value };
  }

  delete(id: string) {
    delete this.cached[id];
  }

  clear() {
    this.cached = {};
  }
}

export default MemoryStorage;
