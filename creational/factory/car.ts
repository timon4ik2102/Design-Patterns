export abstract class Car {
    name: string;
    speed: number;
    constructor (name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }
    abstract showInfo(): void;
    abstract drive(): void;
    abstract stop(): void;
}
