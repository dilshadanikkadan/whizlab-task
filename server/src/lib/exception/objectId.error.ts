import { CustomError } from './custom.error';

export class ObjectIdError extends CustomError {
  statusCode = 404;

  constructor() {
    super('not valid object Id');

    Object.setPrototypeOf(this, ObjectIdError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not valid ObjectId' }];
  }
}