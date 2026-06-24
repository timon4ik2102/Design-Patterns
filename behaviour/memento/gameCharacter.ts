import GameSave from "./gameSave";
import IMemento, { IGameCharacter } from "./mementoInterface";

class GameCharacter implements IGameCharacter {
    constructor(
        private hp: number,
        private level: number,
        private location: string
    ) {}

    fight(): void {
        this.hp -= 30;
        console.log(`Fighting. HP is now ${this.hp}`);
    }

    enterToTheDesert(): void {
        this.location = 'Desert';
        this.level = 2;
        console.log(`Entered ${this.location}`);
    }

    save(): IMemento {
        console.log('Saving');
        return new GameSave(this.hp, this.level, this.location);
    }

    restore(save: IMemento): void {
        this.hp = save.hp;
        this.level = save.level;
        this.location = save.location;
        console.log(`Restored: HP=${this.hp}, level=${this.level}, location=${this.location}`);
    }

    showStatus(): void {
        console.log(`HP: ${this.hp}, Level: ${this.level} , Location: ${this.location}`);
    }
}

export default GameCharacter;
