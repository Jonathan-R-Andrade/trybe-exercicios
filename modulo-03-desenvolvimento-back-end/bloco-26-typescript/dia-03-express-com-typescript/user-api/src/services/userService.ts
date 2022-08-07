import Joi from 'joi';
import { badRequest, conflict, notFound, unauthorized } from '../errors/httpErrors';
import LoginDataInterface from '../interfaces/loginDataInterface';
import User from '../interfaces/userInterface';
import UserModel from '../models/userModel';

export default class UserService {
  private _userModel: UserModel;
  private _errorMessages = {
    emailAlreadyExists: 'Email already exists',
    userNotFound: 'User not found',
    invalidLoginData: 'Invalid email or password',
  };

  constructor() {
    this._userModel = new UserModel();
  }

  public async login({ email, password }: LoginDataInterface): Promise<User> {
    const user = await this._userModel.getByEmail(email);
    if (!user || user.password !== password) {
      const { invalidLoginData } = this._errorMessages;
      throw unauthorized(invalidLoginData);
    }
    return user;
  }

  public async getAll(): Promise<User[]> {
    return this._userModel.getAll();
  }

  public async getById(id: number): Promise<User> {
    const user = await this._userModel.getById(id);
    const { userNotFound } = this._errorMessages;
    if (!user) throw notFound(userNotFound);
    return user;
  }

  public async create(user: User): Promise<User> {
    const id = await this._userModel.create(user);
    return { id, ...user };
  }

  public async update(id: number, user: User): Promise<User> {
    const updated = await this._userModel.update(id, user);
    const { userNotFound } = this._errorMessages;
    if (!updated) throw notFound(userNotFound);
    return { id, ...user };
  }

  public async delete(id: number): Promise<boolean> {
    const deleted = await this._userModel.delete(id);
    const { userNotFound } = this._errorMessages;
    if (!deleted) throw notFound(userNotFound);
    return deleted;
  }

  public async checkIfEmailExists(email: string): Promise<void> {
    if (typeof email !== 'string') return;
    const emailExists = await this._userModel.emailExists(email);
    const { emailAlreadyExists } = this._errorMessages;
    if (emailExists) throw conflict(emailAlreadyExists);
  }

  public validateUpdateData(user: User): void {
    const schema = Joi.object({
      name: Joi.string().min(3),
      email: Joi.string().email(),
      password: Joi.string().min(6).max(12),
    }).required().min(1).label('User');
    const { error } = schema.validate(user);
    if (error) throw badRequest(error.message);
  }

  public validateUser(user: User): void {
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(12),
    }).required().label('User');
    const { error } = schema.validate(user);
    if (error) throw badRequest(error.message);
  }

  public validateLoginData(loginData: LoginDataInterface): void {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(12),
    }).required().label('Login Data');
    const { error } = schema.validate(loginData);
    if (error) throw badRequest(error.message);
  }
}
