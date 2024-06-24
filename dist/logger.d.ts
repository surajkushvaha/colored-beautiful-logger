import { LoggerOptions } from "./interfaces/interface";
declare class Logger {
    private logDirectory;
    private logFile;
    private logStream;
    private labels;
    private fgColors;
    private bgColors;
    private logRotationInterval;
    constructor(options?: LoggerOptions);
    private defaultLabels;
    private defaultFgColors;
    private defaultBgColors;
    private getCallerName;
    private findProjectRoot;
    private createLogFile;
    private scheduleLogRotation;
    private rotateLogFile;
    private log;
    error(message: any): void;
    warn(message: any): void;
    info(message: any): void;
    success(message: any): void;
    notify(message: any): void;
    alert(message: any): void;
    normalize(message: any): void;
}
export default Logger;
