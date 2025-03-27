import "reflect-metadata"

export function Injectable({scope = "Singletone"} = {}):ClassDecorator{
    console.log('Injectable Called')
    return (target) => {
        Reflect.defineMetadata('injectable', true, target);
    }
}