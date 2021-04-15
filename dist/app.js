"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const toDos_1 = __importDefault(require("./routes/toDos"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/todos', toDos_1.default);
//midleware
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
app.listen(3000);
