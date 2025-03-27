class Container {
    private providers = new Map();
    resolve(provider: any){
        // Если нет метадаты Injectable - ошибка
        if(!Reflect.getMetadata('injectable', provider)){
            throw new Error(`Class ${provider.name} is not marked as @Injectable`)
        }
        // Извлекаем зависимости, если их нет - пустой массив
        const params = Reflect.getMetadata("design:paramtypes", provider) || [];
        // Перебираем все зависимости, и рекурсивно их разрешаем
        const dependencies = params.map((param: any) => this.resolve(param))

        // создаем инстанс, передавая его зависимости
        const instance = new provider(...dependencies);
        // Добавляем в Map  с провайдерами
        this.providers.set(provider.name, instance)
        return instance;
    }
}
export const container = new Container();