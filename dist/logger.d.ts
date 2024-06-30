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
     * give formatted message according to options
     * @private
     * @param label
     * @param message
     * @returns {string}
     */
    private formatMessage;
    /**
     * log for browser console
     * @private
     * @param formattedMessage
     * @param mappedLabelColor
     * @param message
     * @returns {void}
     */
    private logToBrowser;
    /**
     * log for node console
     * @private
     * @param formattedMessage
     * @param mappedLabelColor
     * @param message
     * @returns {void}
     */
    private logToNode;
    /**
     * @private
     * @param formattedMessage
     * @param message
     * @returns {void}
     */
    private saveToFile;
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
    /**
     * Retrieves the color string suitable for browser console styling based on the provided color configuration.
     * Converts ANSI escape sequences to RGB format if necessary.
     * @private
     * @param {COLOR} mappedLabelColor - The color configuration for the label.
     * @returns {string} The CSS style string for setting text color in the browser console.
     */
    private getColorStringForBrowser;
    /**
     * Retrieves the ANSI escape sequence or color code suitable for Node.js console styling based on the provided color configuration.
     * Converts RGB colors to ANSI escape sequences if necessary.
     * @private
     * @param {COLOR} mappedLabelColor - The color configuration for the label.
     * @returns {string} The ANSI escape sequence or color code for setting text color in the Node.js console.
     */
    private getColorStringForNode;
    /**
     * Converts an 8-bit ANSI color code to an RGB value.
     * @private
     * @param {number} code - The 8-bit ANSI color code.
     * @returns {RGBColor} The RGB value as an object {R, G, B}.
     */
    private ansiToRgb;
    /**
     * Finds the closest ANSI color code to the given RGB value.
     * @private
     * @param {RGBColor} color - The RGB color object {R, G, B}.
     * @returns {number} The closest 8-bit ANSI color code.
     */
    private rgbToAnsi;
    /**
     * Extracts the ANSI color code from an escape sequence and converts it to RGB.
     * @private
     * @param {string} ansi - The ANSI escape sequence.
     * @returns {AnsiColorResult} An object containing the RGB value and background flag.
     */
    private ansiEscapeToRgb;
    /**
     * Check if it is Browser Environment
     * @private
     * @returns {boolean}
     */
    private isItBrowser;
    /**
     * Check if it is Node Environment
     * @private
     * @returns {boolean}
     */
    private isItNode;
}
