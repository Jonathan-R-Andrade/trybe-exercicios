import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const user = await this._userService.create(req.body);
    res.status(201).send(user);
  };
}
