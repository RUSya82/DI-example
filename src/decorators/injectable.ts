import "reflect-metadata"
import {Scopes} from "../types/scopes.enum";

export function Injectable({scope = Scopes.SINGLETONE} = {}):ClassDecorator{
    // console.log('Injectable Called')
    return (target) => {
        Reflect.defineMetadata('injectable', true, target);
        Reflect.defineMetadata('scope', scope, target);
        if (!Reflect.hasMetadata('design:paramtypes', target)) {
            Reflect.defineMetadata('design:paramtypes', [], target);
        }
    }
}