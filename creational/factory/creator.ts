import { Car } from "./car";

export abstract class Creator {
    abstract createCar(name: string, speed: number): Car;
}
