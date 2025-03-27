import {Service} from "./service";
import {Injectable} from "./decorators/injectable";
import {Scopes} from "./types/scopes.enum";

@Injectable({scope: Scopes.TRANSIENT})
export class Controller{
    static counter = 0;
    constructor(private service: Service) {
        Controller.counter++;
        console.log(`Controller counter: ${Controller.counter}`);
    }
    start(){
        this.service.serviceLog();
        this.service.serviceWarn();
    }
}