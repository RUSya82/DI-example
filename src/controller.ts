import {Service} from "./service";

export class Controller{
    private service: Service;
    constructor() {
        this.service = new Service();
    }
    start(){
        this.service.getAll();
    }
}