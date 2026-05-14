export abstract class Engine {
    public name: string;
    public resource: number;
    protected constructor (name: string, resource: number) {
        this.name = name;
        this.resource = resource;

    }
    abstract showEngineInfo(): void;
    abstract showResourseOfEngine(): void;
}
