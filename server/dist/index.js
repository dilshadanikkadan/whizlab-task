"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./apps/inventory/api/routes"));
const global_error_1 = require("./lib/exception/global.error");
const app = (0, express_1.default)();
const corsOptions = {
    origin: ["http://localhost:5173", "https://basis-ai-task.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use('/inventory', routes_1.default);
app.get('/', (_, res) => {
    res.send('server is on!!!');
});
app.use(global_error_1.errorHandler);
exports.default = app;
