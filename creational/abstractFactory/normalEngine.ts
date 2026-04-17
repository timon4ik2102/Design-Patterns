import { Engine } from "./engine";

export class NormalEngineEngine extends Engine {
    showEngineInfo(): void {
        console.log(`Name: ${this.name} is normal engine`);
    };
    showResourseOfEngine(): void {
        console.log(`${this.name} has  resource ${this.resource} kilometers `);
    };
}