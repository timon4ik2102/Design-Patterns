export abstract class Engine {
    name: string;
    resource: number;
    constructor (name: string, resource: number) {
        this.name = name;
        this.resource = resource;

    }
    abstract showEngineInfo(): void;
    abstract showResourseOfEngine(): void;
}