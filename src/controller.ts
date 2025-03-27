import {Service} from "./service";
import {Injectable} from "./decorators/injectable";

@Injectable()
export class Controller{
    constructor(private service: Service) {
    }
    start(){
        this.service.serviceLog();
        this.service.serviceWarn();
    }
}