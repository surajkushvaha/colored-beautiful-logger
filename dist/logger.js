"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;var desc=Object.getOwnPropertyDescriptor(m,k);if(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable)){desc={enumerable:true,get:function(){return m[k]}}}Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k]});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v})}:function(o,v){o["default"]=v});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:true});const moment_1=__importDefault(require("moment"));const fs=__importStar(require("fs"));const path=__importStar(require("path"));const colors_1=require("./constants/colors");class NodeLogger{constructor(options){this.logRotationInterval=24*60*60*1e3;this.MAPPED_LABEL={error:colors_1.Color.RED,warning:colors_1.Color.YELLOW,info:colors_1.Color.CYAN,success:colors_1.Color.GREEN,log:colors_1.Color.WHITE,notify:colors_1.Color.BLUE,alert:colors_1.Color.YELLOWBG,critical:colors_1.Color.REDBG};this.logger=this.createMappedLoggerFunction();if(!options){options={}}this.options=options;this.checkOptions(options)}checkOptions(options){if(options.saveLogFile){this.setLogDirectoryAndFile(options);if(!fs.existsSync(this.logDirectory)){fs.mkdirSync(this.logDirectory,{recursive:true})}this.createLogStream(options)}if(options.customLabels&&options.customLabels.length){this.updateCustomLabels(options.customLabels);this.createMappedLoggerFunction()}}setLogDirectoryAndFile(options){this.logDirectory=options.logFolderPath?path.resolve(process.cwd(),options.logFolderPath):path.join(process.cwd(),"logs");const filename=options.logFileName||(0,moment_1.default)().format("DD-MM-YYYY")+".log";this.logFile=path.join(this.logDirectory,filename)}updateCustomLabels(customLabels){customLabels.forEach(label=>{if(!label.label||!label.color)return;this.MAPPED_LABEL[label.label]=label.color})}createMappedLoggerFunction(){Object.keys(this.MAPPED_LABEL).forEach(key=>{if(!this.logger)this.logger={};this.logger[key]=message=>this.log(key,message)});return Object.assign(this.logger)}getCallerName(){var _a,_b;const error=new Error;const stackLines=((_a=error.stack)===null||_a===void 0?void 0:_a.split("\n"))||[];const callerLine=(_b=stackLines[4])===null||_b===void 0?void 0:_b.trim();if(!callerLine)return"Unknown";const matches=callerLine.match(/at\s+(.*?)\s+\(/);if(matches&&matches.length>=2){return`${callerLine}`}return"Unknown"}log(label,message){let formattedMessage="";if(this.options.printTimestamp)formattedMessage+=`[${(0,moment_1.default)().format()}] `;if(this.options.printLabelName)formattedMessage+=`[${label.toUpperCase()}] `;if(this.options.printCallerFunctionLocation)formattedMessage+=`[Function ${this.getCallerName()}] `;if(this.options.printTimestamp||this.options.printCallerFunctionLocation||this.options.printLabelName)formattedMessage+=`: `;console.log(this.MAPPED_LABEL[label],formattedMessage,message,colors_1.Color.RESET);if(this.options.saveLogFile){if(typeof message==="object"){try{message=JSON.stringify(message)}catch(e){console.error(e.message);message="Error: Unable to stringify object"}}formattedMessage=`${formattedMessage} ${message}\n`;this.logStream.write(formattedMessage)}}createLogStream(options){this.logStream=fs.createWriteStream(this.logFile,{flags:"a"});setInterval(()=>{if(this.logStream.bytesWritten>(options.logRotationInterval||this.logRotationInterval)){this.rotateLogFile()}},options.logRotationInterval||this.logRotationInterval)}createLogFile(){return fs.createWriteStream(this.logFile,{flags:"a"})}rotateLogFile(){this.logStream.end();fs.unlink(this.logFile,err=>{if(err){console.error(colors_1.Color.RED,"Error deleting log file:",err)}else{this.logStream=this.createLogFile();console.log(colors_1.Color.GREEN,"Log file rotated successfully.")}})}}exports.default=NodeLogger;