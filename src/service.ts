import {Logger} from "./logger";

export class Service {
    constructor(private logger: Logger) {
    }
    getAll(){
        this.logger.log(`method log from service`)
    }
}