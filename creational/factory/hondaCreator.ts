import { Honda } from "./honda";
import { Creator } from "./creator";

export class HondaCreator extends Creator {
    createCar(name: string, speed: number): Honda {
        return new Honda(name, speed);
    }
}