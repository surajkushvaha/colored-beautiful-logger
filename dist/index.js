"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.Logger = void 0;
const logger_1 = __importDefault(require("./logger"));
const colors_1 = require("./constants/colors");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return colors_1.Color; } });
const Logger = logger_1.default;
exports.Logger = Logger;
