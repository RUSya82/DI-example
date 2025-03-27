import {ILogger} from "./interfaces/logger.interface";
import {Injectable} from "./decorators/injectable";

@Injectable()
export class Logger implements ILogger{
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