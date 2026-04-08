import { Engine } from "./engine";

export class SportEngine extends Engine {
    showEngineInfo(): void {
        console.log(`Name: ${this.name} is sport engine`);
    };
    showResourseOfEngine(): void {
        console.log(`${this.name} has  resource ${this.resource} kilometers `);
    };
}