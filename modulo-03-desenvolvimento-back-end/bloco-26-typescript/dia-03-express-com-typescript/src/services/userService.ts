import User from '../interfaces/userInterface';
import UserModel from '../models/userModel';

export default class UserService {
  private _userModel: UserModel;

  constructor() {
    this._userModel = new UserModel();
  }

  public async getAll(): Promise<User[]> {
    return this._userModel.getAll();
  }

  public async getById(id: number): Promise<User> {
    return this._userModel.getById(id);
  }

  public async create(user: User): Promise<User> {
    const id = await this._userModel.create(user);
    return { id, ...user };
  }

  public async update(id: number, user: User): Promise<User> {
    await this._userModel.update(id, user);
    return { id, ...user };
  }

  public async delete(id: number): Promise<boolean> {
    return this._userModel.delete(id);
  }
}
