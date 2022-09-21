import HttpStatus from "../enums/httpStatus"
import HttpError from "./httpError"

export function badRequest(message = 'Bad request') {
  return new HttpError(HttpStatus.BAD_REQUEST, message);
};

export function notFound(message = 'Not found') {
  return new HttpError(HttpStatus.NOT_FOUND, message);
};

export default {
  badRequest,
  notFound,
}
