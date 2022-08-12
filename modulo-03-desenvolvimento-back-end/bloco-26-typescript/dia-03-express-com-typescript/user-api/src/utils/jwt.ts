import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import { unauthorized } from '../errors/httpErrors';

dotenv.config();

const SECRET = 'Segredo muito seguro, confia!';

function createToken(data: string | object): string {
  const jwtOptions: SignOptions = { algorithm: 'HS256' };
  return jwt.sign({ data }, process.env.JWT_SECRET || SECRET, jwtOptions);
}

function verifyToken(token: string) {
  if (!token) throw unauthorized('Token not found');
  try {
    return jwt.verify(token, process.env.JWT_SECRET || SECRET);
  } catch (error) {
    throw unauthorized('Invalid token');
  }
}

export default {
  createToken,
  verifyToken,
};
