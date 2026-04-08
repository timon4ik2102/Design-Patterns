import { Honda } from "./honda";
import { Creator } from "./abstractFactory";

export class HondaCreator extends Creator {
    createCar(name: string, speed: number): Honda {
        return new Honda(name, speed);
    }
}