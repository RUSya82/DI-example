import {Service} from "./service";
import {Injectable} from "./decorators/injectable";
import {Scopes} from "./types/scopes.enum";
import {Logger} from "./logger";

@Injectable({scope: Scopes.TRANSIENT})
export class Controller{
    static counter = 0;
    constructor(private service: Service, private logger: Logger) {
        Controller.counter++;
        this.logger.log(`Controller counter: ${Controller.counter}`);
    }
    start(){
        this.service.serviceLog();
        this.service.serviceWarn();
    }
}