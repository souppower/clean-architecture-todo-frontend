class LocalStorage {
  constructor(private key: string) {}

  get(id: string) {
    return localStorage.getItem(id);
  }

  getAll(): any[] {
    const retrieved = localStorage.getItem(this.key);
    if (!retrieved) {
      return [];
    }
    return JSON.parse(retrieved);
  }

  save(value: any) {
    const list = this.getAll();
    list.push(value);
    localStorage.setItem(this.key, JSON.stringify(list));
  }

  delete(id: string) {
    const list = this.getAll();
    const filtered = list.filter(el => el.id !== id);
    localStorage.setItem(this.key, JSON.stringify(filtered));
  }

  clear() {
    localStorage.clear();
  }
}

export default LocalStorage;
