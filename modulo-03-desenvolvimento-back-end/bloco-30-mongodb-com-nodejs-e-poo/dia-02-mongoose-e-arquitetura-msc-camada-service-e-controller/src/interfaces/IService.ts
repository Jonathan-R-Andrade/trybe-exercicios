interface IService<T> {
  create(obj: T): Promise<T>,
  readOne(_id: string): Promise<T>,
  readAll(): Promise<T[]>,
  delete(id: string): Promise<void>,
}

export default IService;
