import {Creator} from './creator.ts';
import {Ferrari} from './ferrari.ts';

export class FerrariCreator extends Creator {
    createCar(name: string, speed: number): Ferrari {
        return new Ferrari(name, speed)
    }
}