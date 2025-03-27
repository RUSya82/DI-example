export class Container {
    private providers = new Map();

    // register(provider: any){
    //     this.providers.set(provider.name, provider);
    // }

    resolve(provider: any){
        if(!Reflect.getMetadata('injectable', provider)){
            throw new Error(`Class ${provider.name} is not marked as @Injectable`)
        }
        const params = Reflect.getMetadata("design:paramtypes", provider) || [];
        const dependencies = params.map((param: any) => this.resolve(param))

        const instance = new provider(...dependencies);
        this.providers.set(provider.name, instance)
        return instance;
    }
}