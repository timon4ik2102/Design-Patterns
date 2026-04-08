import { Car} from "./car";

export class Ferrari extends Car {
    showInfo(): void {
        console.log(`Name: ${this.name}, Speed: ${this.speed}`);
    };
    drive(): void {
        console.log(`${this.name} is driving at ${this.speed} km/h`);
    };
    stop(): void {
        console.log(`${this.name} is stopping`);
    };
}