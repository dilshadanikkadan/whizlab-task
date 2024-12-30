"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootAllDependencies = void 0;
const server_1 = __importDefault(require("../_boot/server"));
const index_1 = __importDefault(require("../index"));
const databse_1 = __importDefault(require("../_boot/databse"));
/**
 * This fn will boot all  Dependencies  along with its parameters
 */
const bootAllDependencies = async () => {
    try {
        await (0, server_1.default)(index_1.default);
        await (0, databse_1.default)();
        process.on('SIGTERM', async () => {
            console.info("SIGTERM received");
        });
    }
    catch (error) {
        console.log(`Oops!`, error?.message);
    }
};
exports.bootAllDependencies = bootAllDependencies;
