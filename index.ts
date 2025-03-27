import {Container} from "./src/container";
import {Controller} from "./src/controller";

const container = new Container();
const controller = container.resolve(Controller);
controller.start();