class Container {
    private providers = new Map();

    register(name: string, provider: any){
        this.providers.set(name, provider);
    }

    resolve(name: string){
        const provider = this.providers.get(name);
        return new provider();
    }
}
export const container = new Container();