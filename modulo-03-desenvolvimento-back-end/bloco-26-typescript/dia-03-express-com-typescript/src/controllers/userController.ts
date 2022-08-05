import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const users = await this._userService.getAll();
    res.status(200).send(users);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this._userService.getById(Number(id));
    res.status(200).send(user);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const user = await this._userService.create(req.body);
    res.status(201).send(user);
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this._userService.update(Number(id), req.body);
    res.status(200).send(user);
  };
}
