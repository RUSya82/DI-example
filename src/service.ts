import {IService} from "./interfaces/service.inreface";
import {Injectable} from "./decorators/injectable";
import {Logger} from "./logger";

@Injectable()
export class Service implements IService{
    constructor(private logger: Logger) {

    }
    serviceLog(){
        this.logger.log(`LOG log from service`)
    }
    serviceWarn(){
        this.logger.warn('WARN from service')
    }
}