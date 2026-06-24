export default interface IMemento {
    readonly hp: number;
    readonly level: number;
    readonly location: string;
}

export interface IGameCharacter {
    showStatus(): void;
    fight(): void;
    enterToTheDesert(): void;
    save(): IMemento;
    restore(save: IMemento): void;
}

export interface ISaveManager {
    store(save: IMemento): void;
    getLastSave(): IMemento | undefined;
}
