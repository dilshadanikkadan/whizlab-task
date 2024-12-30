"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
/*
    error hanlding with custorm err
  */
class CustomError extends Error {
    constructor(message) {
        super(message);
        // managing the prototype chain without loosisng
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
