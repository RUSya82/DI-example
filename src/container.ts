import {Scopes} from "./types/scopes.enum";

export class Container {
    private providers = new Map();


    resolve<T>(provider: new (...args: any[]) => T):T{
        if(!Reflect.getMetadata('injectable', provider)){
            throw new Error(`Class ${provider.name} is not marked as @Injectable`)
        }
        const isSingletone = Reflect.getMetadata('scope', provider) === Scopes.SINGLETONE;
        if(isSingletone){
            if(this.providers.has(provider.name)){
                return this.providers.get(provider.name)
            }
        }

        const params = Reflect.getMetadata("design:paramtypes", provider) || [];
        const dependencies = params.map((param: any) => this.resolve(param));
        const instance = new provider(...dependencies);

        if(isSingletone){
            this.providers.set(provider.name, instance);
        }
        return  instance;
    }
}