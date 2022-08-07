import HttpStatus from "../enums/httpStatus"
import HttpError from "./httpError"

export function badRequest(message = 'Bad request') {
  return new HttpError(HttpStatus.BAD_REQUEST, message);
};

export function unauthorized(message = 'Unauthorized') {
  return new HttpError(HttpStatus.UNAUTHORIZED, message);
};

export function notFound(message = 'Not found') {
  return new HttpError(HttpStatus.NOT_FOUND, message);
};

export function conflict(message = 'Conflict') {
  return new HttpError(HttpStatus.CONFLICT, message);
};

export default {
  badRequest,
  unauthorized,
  notFound,
  conflict,
}
