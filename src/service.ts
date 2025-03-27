import {Logger} from "./logger";
import {container} from "./container";

export class Service {
    private logger: Logger;
    constructor() {
        this.logger = container.resolve('logger');
    }
    getAll(){
        this.logger.log(`method log from service`)
    }
}