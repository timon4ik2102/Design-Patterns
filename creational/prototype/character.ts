interface IPrototype<T> {
    clone(): T;
}

class Character implements IPrototype<Character> {
    name: string;
    health: number;
    level: number;
    inventory: string[];

    constructor(name: string, health: number, level: number, inventory: string[]) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.inventory = inventory;
    }

    /** Same stats; `inventory` is a new array so clone and original stay independent. */
    clone(): Character {
        return new Character(this.name, this.health, this.level, [...this.inventory]);
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Health: ${this.health}, Level: ${this.level}`);
    }
}

export default Character;
