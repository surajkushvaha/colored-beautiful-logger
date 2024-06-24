"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const app_constants_1 = require("./constants/app.constants");
class Logger {
    constructor(options = {}) {
        const { logRotationInterval = 24 * 60 * 60 * 1000, // default 24 hours
        customLabels = {}, customColors = {}, } = options;
        this.logDirectory = path.join(this.findProjectRoot(), "logs");
        const filename = (0, moment_1.default)().format("DD-MM-YYYY") + ".log";
        this.logFile = path.join(this.logDirectory, filename);
        if (!fs.existsSync(this.logDirectory)) {
            fs.mkdirSync(this.logDirectory, { recursive: true });
        }
        this.logStream = this.createLogFile();
        this.labels = Object.assign(Object.assign({}, this.defaultLabels()), customLabels);
        this.fgColors = Object.assign(Object.assign({}, this.defaultFgColors()), customColors.fgColors);
        this.bgColors = Object.assign(Object.assign({}, this.defaultBgColors()), customColors.bgColors);
        this.logRotationInterval = logRotationInterval;
        this.scheduleLogRotation();
    }
    defaultLabels() {
        return {
            error: "error",
            warn: "warn",
            info: "info",
            success: "success",
            notify: "notify",
            alert: "alert",
            normalize: "normalize",
        };
    }
    defaultFgColors() {
        return {
            FgRed: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgRed,
            FgMagenta: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgMagenta,
            FgBlue: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgBlue,
            FgGreen: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgGreen,
            FgCyan: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgCyan,
            FgYellow: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgYellow,
            FgWhite: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.FgWhite,
        };
    }
    defaultBgColors() {
        return {
            BgRed: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgRed,
            BgMagenta: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgMagenta,
            BgBlue: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgBlue,
            BgGreen: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgGreen,
            BgCyan: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgCyan,
            BgYellow: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgYellow,
            BgWhite: app_constants_1.APP_CONSTANTS.CONSOLE_COLORS.BgWhite,
        };
    }
    getCallerName() {
        var _a, _b;
        const error = new Error();
        const stackLines = ((_a = error.stack) === null || _a === void 0 ? void 0 : _a.split("\n")) || [];
        const callerLine = (_b = stackLines[4]) === null || _b === void 0 ? void 0 : _b.trim();
        if (!callerLine)
            return "Unknown";
        const matches = callerLine.match(/at\s+(.*?)\s+\(/);
        if (matches && matches.length >= 2) {
            return `${callerLine}`;
        }
        return "Unknown";
    }
    findProjectRoot() {
        let currentDir = __dirname;
        while (!fs.existsSync(path.join(currentDir, "package.json"))) {
            currentDir = path.resolve(currentDir, "..");
        }
        return currentDir;
    }
    createLogFile() {
        return fs.createWriteStream(this.logFile, { flags: "a" });
    }
    scheduleLogRotation() {
        setInterval(() => this.rotateLogFile(), this.logRotationInterval);
    }
    rotateLogFile() {
        this.logStream.end();
        fs.unlink(this.logFile, (err) => {
            if (err) {
                console.error(this.bgColors.error, "Error deleting log file:", err);
            }
            else {
                this.logStream = this.createLogFile();
                console.log(this.bgColors.info, "Log file rotated successfully.");
            }
        });
    }
    log(label, message) {
        const functionName = this.getCallerName();
        console.log(this.fgColors[label], `[${(0, moment_1.default)().format()}] [${label}] [Function ${functionName}] :`, message);
        if (typeof message === "object") {
            message = JSON.stringify(message);
        }
        const formattedMessage = `${(0, moment_1.default)().format()} [${label}] [Function ${functionName}] : ${message}\n`;
        this.logStream.write(formattedMessage);
    }
    error(message) {
        this.log(this.labels.error, message);
    }
    warn(message) {
        this.log(this.labels.warn, message);
    }
    info(message) {
        this.log(this.labels.info, message);
    }
    success(message) {
        this.log(this.labels.success, message);
    }
    notify(message) {
        this.log(this.labels.notify, message);
    }
    alert(message) {
        this.log(this.labels.alert, message);
    }
    normalize(message) {
        this.log(this.labels.normalize, message);
    }
}
exports.default = Logger;
