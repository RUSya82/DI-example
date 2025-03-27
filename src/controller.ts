import {Service} from "./service";
import {container} from "./container";

export class Controller{
    private service: Service;
    constructor() {
        this.service = container.resolve('service');
    }
    start(){
        this.service.getAll();
    }
}