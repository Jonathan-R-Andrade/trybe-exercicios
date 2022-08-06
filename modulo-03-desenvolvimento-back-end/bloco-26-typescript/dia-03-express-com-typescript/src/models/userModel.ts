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

  public async getById(id: number): Promise<User> {
    const sql = 'SELECT * FROM Users WHERE id = ?';
    const [[user]]: any = await this._connection.execute(sql, [id]);
    return user;
  }

  public async create(user: User): Promise<number> {
    const { name, email, password } = user;
    const sql = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
    const [{ insertId }] = await this._connection
      .execute<ResultSetHeader>(sql, [name, email, password]);
    return insertId;
  }

  public async update(id: number, user: User): Promise<boolean> {
    const { name, email, password } = user;
    const sql = `
      UPDATE Users
      SET name = ?, email = ?, password = ?
      WHERE id = ?
    `;
    const [{ affectedRows }] = await this._connection
      .execute<ResultSetHeader>(sql, [name, email, password, id]);
    return Boolean(affectedRows);
  }

  public async delete(id: number): Promise<boolean> {
    const sql = 'DELETE FROM Users WHERE id = ?';
    const [{ affectedRows }] = await this._connection
      .execute<ResultSetHeader>(sql, [id]);
    return Boolean(affectedRows);
  }

  public async emailExists(email: string): Promise<boolean> {
    const sql = 'SELECT email FROM Users WHERE email = ?';
    const [[exists]]: any = await this._connection.execute(sql, [email]);
    return Boolean(exists);
  }
}
