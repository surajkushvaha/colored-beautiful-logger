import { Color } from "../constants/colors";
/**
 * Interface representing mapped labels for different log levels.
 * Each key is a log level, and the value is the corresponding label.
 */
export interface MAPPED_LABEL {
    /**
     * Label for error messages.
     */
    error: string;
    /**
     * Label for warning messages.
     */
    warning: string;
    /**
     * Label for informational messages.
     */
    info: string;
    /**
     * Label for success messages.
     */
    success: string;
    /**
     * Label for general log messages.
     */
    log: string;
    /**
     * Label for notification messages.
     */
    notify: string;
    /**
     * Label for alert messages.
     */
    alert: string;
    /**
     * Label for critical messages.
     */
    critical: string;
    /**
     * Additional custom labels.
     */
    [key: string]: string;
}
/**
 * Interface representing a logger with various logging methods.
 */
export interface Logger {
    /**
     * Logs an error message.
     * @param message The error message to log.
     */
    error(message: string): void;
    /**
     * Logs a warning message.
     * @param message The warning message to log.
     */
    warning(message: string): void;
    /**
     * Logs an informational message.
     * @param message The informational message to log.
     */
    info(message: string): void;
    /**
     * Logs a success message.
     * @param message The success message to log.
     */
    success(message: string): void;
    /**
     * Logs a general message.
     * @param message The message to log.
     */
    log(message: string): void;
    /**
     * Logs a notification message.
     * @param message The notification message to log.
     */
    notify(message: string): void;
    /**
     * Logs an alert message.
     * @param message The alert message to log.
     */
    alert(message: string): void;
    /**
     * Logs a critical message.
     * @param message The critical message to log.
     */
    critical(message: string): void;
    /**
     * Additional custom logging methods.
     */
    [key: string]: ((message: string) => void);
}
/**
 * Interface representing custom labels with associated colors.
 */
export interface customLabels {
    /**
     * The color associated with the label.
     */
    color: Color;
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
