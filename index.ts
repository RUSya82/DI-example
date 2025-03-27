import {Container} from "./src/container";
import {Controller} from "./src/controller";


const container = new Container();

const controller = container.resolve(Controller);
const controller2 = container.resolve(Controller);
const controller3 = container.resolve(Controller);

controller.start()
controller2.start()
controller3.start()