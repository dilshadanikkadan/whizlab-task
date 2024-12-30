"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdError = void 0;
const custom_error_1 = require("./custom.error");
class ObjectIdError extends custom_error_1.CustomError {
    statusCode = 404;
    constructor() {
        super('not valid object Id');
        Object.setPrototypeOf(this, ObjectIdError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Not valid ObjectId' }];
    }
}
exports.ObjectIdError = ObjectIdError;
