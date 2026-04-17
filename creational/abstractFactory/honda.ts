import { Car} from "./car";

export class Honda extends Car {
    showInfo(): void {
        console.log(`This car name: ${this.name} and we dont show speed`);
    };
    drive(): void {
        console.log(`The speed of driving is normal speed`);
    };
    stop(): void {
        console.log(`${this.name} can not stop`);
        console.log(`UPSS, the car was broken`);
    };
}