import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';
import connection from './connection';

export default class UserModel {
  private _connection: Pool;

  constructor() {
    this._connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const sql = 'SELECT id, name FROM Users';
    const [users]: any = await this._connection.execute(sql);
    return users;
  }

  public async create(user: User): Promise<number> {
    const { name, email, password } = user;
    const sql = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
    const [{ insertId }] = await this._connection
      .execute<ResultSetHeader>(sql, [name, email, password]);
    return insertId;
  }
}
