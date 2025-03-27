import {container} from "./container";
import {ILogger} from "./interfaces/logger.interface";
import {IService} from "./interfaces/service.inreface";

export class Service implements IService{
    private logger: ILogger;
    constructor() {
        this.logger = container.resolve('logger');
    }
    serviceLog(){
        this.logger.log(`LOG log from service`)
    }
    serviceWarn(){
        this.logger.warn('WARN from service')
    }
}