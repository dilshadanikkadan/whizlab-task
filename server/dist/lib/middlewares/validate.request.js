"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const req_validation_error_1 = require("../exception/req-validation.error");
// import { RequestValidationError } from "../exceptions/request-validation-error";
const validateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new req_validation_error_1.RequestValidationError(errors.array());
    }
    else {
        next();
    }
};
exports.validateRequest = validateRequest;
