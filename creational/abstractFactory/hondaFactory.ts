import {AbstractFactory} from './abstractFactory.ts';
import {Honda} from './honda.ts';
import {NormalEngineEngine} from './normalEngine.ts';

export class HondaFactory extends AbstractFactory {
    createCar(name: string, speed: number): Honda {
        return new Honda(name, speed)
    }
    createEngine(name: string, resource: number): NormalEngineEngine {
        return new NormalEngineEngine(name, resource)
    }
}