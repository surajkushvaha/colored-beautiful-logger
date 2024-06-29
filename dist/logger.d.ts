import { Logger, LoggerOptions } from "./interfaces/interface";
/**
 * Class representing a logger for Node.js applications.
 * Provides various logging methods with customizable options.
 */
export default class NodeLogger {
    /**
     * Log rotation interval in milliseconds.
     * @private
     * @type {number}
     */
    private logRotationInterval;
    /**
     * Directory path for log files.
     * @private
     * @type {string}
     */
    private logDirectory;
    /**
     * Log file path.
     * @private
     * @type {string}
     */
    private logFile;
    /**
     * Write stream for the log file.
     * @private
     * @type {fs.WriteStream}
     */
    private logStream;
    /**
     * Mapped labels for different log levels.
     * @private
     * @type {MAPPED_LABEL}
     */
    private MAPPED_LABEL;
    /**
     * Logger options.
     * @private
     * @type {LoggerOptions}
     */
    private options;
    /**
     * Logger instance with various logging methods.
     * @public
     * @type {Logger}
     */
    logger: Logger;
    /**
     * Creates an instance of NodeLogger.
     * @param {LoggerOptions} [options] - Logger options.
     */
    constructor(options?: LoggerOptions);
    /**
     * Checks and sets the provided options.
     * @private
     * @param {LoggerOptions} options - Logger options.
     * @returns {void}
     */
    private checkOptions;
    /**
     * Sets the log directory and file path based on the provided options.
     * @private
     * @param {LoggerOptions} options - Logger options.
     * @returns {void}
     */
    private setLogDirectoryAndFile;
    /**
     * Updates the custom labels based on the provided options.
     * @private
     * @param {customLabels[]} customLabels - Array of custom labels.
     * @returns {void}
     */
    private updateCustomLabels;
    /**
     * Creates a mapped logger function for each log level.
     * @private
     * @returns {Logger}
     */
    private createMappedLoggerFunction;
    /**
     * Retrieves the caller function's name and location.
     * @private
     * @returns {string}
     */
    private getCallerName;
    /**
     * Logs a message with the specified label.
     * @private
     * @param {string} label - The log level label.
     * @param {any} message - The message to log.
     * @returns {void}
     */
    private log;
    /**
     * Creates a write stream for the log file and sets up log rotation.
     * @private
     * @param {LoggerOptions} options - Logger options.
     * @returns {void}
     */
    private createLogStream;
    /**
     * Creates a new log file.
     * @private
     * @returns {fs.WriteStream}
     */
    private createLogFile;
    /**
     * Rotates the log file by deleting the old one and creating a new one.
     * @private
     * @returns {void}
     */
    private rotateLogFile;
}
