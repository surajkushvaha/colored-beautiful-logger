/**
 * Interface representing mapped labels for different log levels.
 * Each key is a log level, and the value is the corresponding label.
 */
export interface MAPPED_LABEL {
    /**
     * Label for error messages.
     */
    error: COLOR;
    /**
     * Label for warning messages.
     */
    warning: COLOR;
    /**
     * Label for informational messages.
     */
    info: COLOR;
    /**
     * Label for success messages.
     */
    success: COLOR;
    /**
     * Label for general log messages.
     */
    log: COLOR;
    /**
     * Label for notification messages.
     */
    notify: COLOR;
    /**
     * Label for alert messages.
     */
    alert: COLOR;
    /**
     * Label for critical messages.
     */
    critical: COLOR;
    /**
     * Additional custom labels.
     */
    [key: string]: COLOR;
}
/**
 * Interface representing a logger with various logging methods.
 */
export interface Logger {
    /**
     * Logs an error message.
     * @param message The error message to log.
     */
    error(message: any): void;
    /**
     * Logs a warning message.
     * @param message The warning message to log.
     */
    warning(message: any): void;
    /**
     * Logs an informational message.
     * @param message The informational message to log.
     */
    info(message: any): void;
    /**
     * Logs a success message.
     * @param message The success message to log.
     */
    success(message: any): void;
    /**
     * Logs a general message.
     * @param message The message to log.
     */
    log(message: any): void;
    /**
     * Logs a notification message.
     * @param message The notification message to log.
     */
    notify(message: any): void;
    /**
     * Logs an alert message.
     * @param message The alert message to log.
     */
    alert(message: any): void;
    /**
     * Logs a critical message.
     * @param message The critical message to log.
     */
    critical(message: any): void;
    /**
     * Additional custom logging methods.
     */
    [key: string]: ((message: any) => void);
}
/**
 * Interface representing custom labels with associated colors.
 */
export interface customLabels {
    /**
     * The color associated with the label.
     */
    color: COLOR;
    /**
     * The custom label text.
     */
    label: string;
}
/**
 * Interface representing options for configuring the logger.
 */
export interface LoggerOptions {
    /**
     * The path to the folder where logs will be saved.
     */
    logFolderPath?: string;
    /**
     * The name of the log file.
     */
    logFileName?: string;
    /**
     * The interval for log rotation, in milliseconds.
     */
    logRotationInterval?: number;
    /**
     * Whether to save the log file.
     */
    saveLogFile?: boolean;
    /**
     * Custom labels to use in logging.
     */
    customLabels?: customLabels[];
    /**
     * Whether to print a timestamp in each log entry.
     */
    printTimestamp?: boolean;
    /**
     * Whether to print the label name in each log entry.
     */
    printLabelName?: boolean;
    /**
     * Whether to print the caller function location in each log entry.
     */
    printCallerFunctionLocation?: boolean;
}
export interface RGBColor {
    R: number;
    G: number;
    B: number;
    isBackground?: boolean;
}
export interface AnsiColorResult {
    color: RGBColor;
    isBackground: boolean;
}
export interface AnsiColor {
    ansiCode: string;
}
export type COLOR = "BLACK" | "RED" | "GREEN" | "YELLOW" | "BLUE" | "CYAN" | "WHITE" | "BLACKBG" | "REDBG" | "GREENBG" | "YELLOWBG" | "BLUEBG" | "MEGENTABG" | "CYANBG" | "WHITEBG" | "RESET" | RGBColor | AnsiColor;
