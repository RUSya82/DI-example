import {container} from "./src/container";
import {Logger} from "./src/logger";
import {Service} from "./src/service";
import {Controller} from "./src/controller";


container.register('logger', Logger);
container.register('service', Service);

const controller = new Controller();
controller.start()

