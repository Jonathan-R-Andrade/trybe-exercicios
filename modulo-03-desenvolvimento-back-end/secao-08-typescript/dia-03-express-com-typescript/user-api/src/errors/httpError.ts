import HttpStatus from "../enums/httpStatus";

export default class HttpError extends Error {
  public name: string = 'HttpError';
  public statusCode: number;

  constructor(httpStatus: HttpStatus, message?: string) {
    super(message || HttpStatus[httpStatus]);
    this.statusCode = httpStatus;
  }
};
