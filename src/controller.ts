import {Service} from "./service";

export class Controller{
    constructor(private service: Service) {
    }
    start(){
        this.service.getAll();
    }
}