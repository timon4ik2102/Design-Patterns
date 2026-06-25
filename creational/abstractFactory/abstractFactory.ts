import Car from "./car.ts";
import Engine from "./engine.ts";

export abstract class AbstractFactory {
    abstract createCar(name: string, speed: number): Car;
    abstract createEngine(name: string, resource: number): Engine;
}
