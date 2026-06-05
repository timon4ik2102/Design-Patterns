import Engine  from "./engine";

export class NormalEngine extends Engine {
    constructor(name: string, resource: number) {
        super(name, resource);
    }

    showEngineInfo(): void {
        console.log(`Name: ${this.name} is normal engine`);
    };
    showResourseOfEngine(): void {
        console.log(`${this.name} has  resource ${this.resource} kilometers `);
    };
}
