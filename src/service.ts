import {Logger} from "./logger";

export class Service {
    private logger: Logger;
    constructor() {
        this.logger = new Logger();
    }
    getAll(){
        this.logger.log(`method log from service`)
    }
}