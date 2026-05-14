import {AbstractFactory} from './abstractFactory.ts';
import {Honda} from './honda.ts';
import {NormalEngine} from './normalEngine.ts';

export class HondaFactory extends AbstractFactory {
    createCar(name: string, speed: number): Honda {
        return new Honda(name, speed)
    }
    createEngine(name: string, resource: number): NormalEngine {
        return new NormalEngine(name, resource)
    }
}
