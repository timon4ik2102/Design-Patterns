export abstract class Car {
    public name: string;
    public speed: number;
    private constructor (name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }
    abstract showInfo(): void;
    abstract drive(): void;
    abstract stop(): void;
}