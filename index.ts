import {Logger} from "./src/logger";
import {Service} from "./src/service";
import {Controller} from "./src/controller";

const logger = new Logger();
const service = new Service(logger);
const controller = new Controller(service);
controller.start()