interface IPrototype<T> {
    clone(): T;
}

type CharacterProps = {
    name: string;
    health: number;
    level: number;
    num: number;
    inventory: string[];
    showInfo: () => void;
}

class Character implements IPrototype<Character>, Partial<CharacterProps> {
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
    clone(): Character {
        return new Character(this.name, this.health, this.level, this.inventory);
    }
    showInfo(): void {
        console.log(`Name: ${this.name}, Health: ${this.health}, Level: ${this.level}`);
    }
}

export default Character;