import {ILogger} from "./interfaces/logger.interface";
import {Injectable} from "./decorators/injectable";
import {Scopes} from "./types/scopes.enum";

@Injectable({scope: Scopes.TRANSIENT})
export class Logger implements ILogger{
    static counter = 0;
    constructor() {
        Logger.counter++;
        this.log(`Logger counter: ${Logger.counter}`);
    }
    log(message: string){
        console.log(`[LOG] - ${message}`)
    }
    warn(message: string){
        console.warn(`[WARNING] - ${message}`)
    }

    error(message: string){
        console.error(`[ERROR] - ${message}`)
    }
}