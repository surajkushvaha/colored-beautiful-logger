export interface LoggerOptions {
    logRotationInterval?: number;
    customLabels?: Record<string, string>;
    customColors?: CustomColors;
}
export interface CustomColors {
    fgColors?: Record<string, string>;
    bgColors?: Record<string, string>;
}
export interface Labels {
    error: string;
    warn: string;
    info: string;
    success: string;
    notify: string;
    alert: string;
    normalize: string;
    [key: string]: string;
}
export interface FgColors {
    FgRed: string;
    FgMagenta: string;
    FgBlue: string;
    FgGreen: string;
    FgCyan: string;
    FgYellow: string;
    FgWhite: string;
    [key: string]: string;
}
export interface BgColors {
    BgRed: string;
    BgMagenta: string;
    BgBlue: string;
    BgGreen: string;
    BgCyan: string;
    BgYellow: string;
    BgWhite: string;
    [key: string]: string;
}
