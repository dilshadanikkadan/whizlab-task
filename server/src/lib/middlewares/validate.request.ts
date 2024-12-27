import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../exception/req-validation.error";
// import { RequestValidationError } from "../exceptions/request-validation-error";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  console.log("=============");
  console.log(errors)
  console.log("=============");
  
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }else{

      next();
  }
};