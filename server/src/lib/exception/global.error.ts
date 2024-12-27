import { Request, Response, NextFunction } from 'express';
import { CustomError } from './custom.error';



 /*
   gloab error handler
  */
export const errorHandler = (
  err: Error,
  req: Request,
  res: any,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};