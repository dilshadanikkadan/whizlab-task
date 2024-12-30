"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = require("./custom.error");
class DatabaseConnectionError extends custom_error_1.CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';
    constructor() {
        super('Error connecting to db');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
