export default interface Persistor {
  get(key: string): any;
  getAll(): any;
  save(value: any): void;
  delete(key: string): void;
  clear(): void;
}
