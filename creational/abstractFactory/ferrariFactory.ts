import {AbstractFactory} from './abstractFactory.ts';
import {Ferrari} from './ferrari.ts';
import {SportEngine} from './sportEngine.ts';

export class FerrariFactory extends AbstractFactory {
    createCar(name: string, speed: number): Ferrari {
        return new Ferrari(name, speed)
    }
    createEngine(name: string, resource: number): SportEngine {
        return new SportEngine(name, resource)
    }
}
