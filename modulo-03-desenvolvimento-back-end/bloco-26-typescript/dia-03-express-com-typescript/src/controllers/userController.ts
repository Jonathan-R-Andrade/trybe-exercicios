import { Request, Response } from 'express';
import HttpStatus from '../enums/httpStatus';
import UserService from '../services/userService';
import jwt from '../utils/jwt';

export default class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  login = async (req: Request, res: Response): Promise<void> => {
    this._userService.validateLoginData(req.body);
    const { id: userId } = await this._userService.login(req.body);
    const token = jwt.createToken({ userId });
    res.status(HttpStatus.OK).send({ token });
  };

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const users = await this._userService.getAll();
    res.status(HttpStatus.OK).send(users);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this._userService.getById(Number(id));
    res.status(HttpStatus.OK).send(user);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    this._userService.validateUser(req.body);
    await this._userService.checkIfEmailExists(req.body.email);
    const user = await this._userService.create(req.body);
    res.status(HttpStatus.CREATED).send(user);
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    this._userService.validateUser(req.body);
    await this._userService.checkIfEmailExists(req.body.email);
    const user = await this._userService.update(Number(id), req.body);
    res.status(HttpStatus.OK).send(user);
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this._userService.delete(Number(id));
    res.status(HttpStatus.NO_CONTENT).end();
  };
}
