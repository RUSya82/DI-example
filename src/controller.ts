import {container} from "./container";
import {IService} from "./interfaces/service.inreface";

export class Controller{
    private service: IService;
    constructor() {
        this.service = container.resolve('service');
    }
    start(){
        this.service.serviceLog();
        this.service.serviceWarn();
    }
}