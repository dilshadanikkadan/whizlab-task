"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const environment_1 = require("../_boot/environment");
/*
  booting the env file to ensure that non of them didn't miss
*/
exports.config = {
    http: {
        host: (0, environment_1.envString)('HOST', 'localhost'),
        port: (0, environment_1.envNumber)('PORT', 3000)
    },
    mongo: {
        database: (0, environment_1.envString)('MONGO_URL', 'auth'),
    },
};
