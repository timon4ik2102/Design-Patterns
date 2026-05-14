import { Car } from "./car";
import { Engine } from "./engine";

export abstract class AbstractFactory {
    abstract createCar(name: string, speed: number): Car;
    abstract createEngine(name: string, resource: number): Engine;
}

