import {IService} from "./interfaces/service.inreface";
import {Injectable} from "./decorators/injectable";
import {Logger} from "./logger";
import {Scopes} from "./types/scopes.enum";

@Injectable({scope: Scopes.TRANSIENT})
export class Service implements IService{
    static counter = 0;
    constructor(private logger: Logger) {
        Service.counter++;
        this.logger.log(`Service counter: ${Service.counter}`)
    }
    serviceLog(){
        this.logger.log(`LOG log from service`)
    }
    serviceWarn(){
        this.logger.warn('WARN from service')
    }
}