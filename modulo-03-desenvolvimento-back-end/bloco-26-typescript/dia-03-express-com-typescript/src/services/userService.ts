import User from '../interfaces/userInterface';
import UserModel from '../models/userModel';

export default class UserService {
  private _userModel: UserModel;

  constructor() {
    this._userModel = new UserModel();
  }

  public async create(user: User): Promise<User> {
    const id = await this._userModel.create(user);
    return { id, ...user };
  }
}
