export interface ICharacter {
    draw(position: number): void;
}

export interface ITextCharacter {
    position: number;
    character: ICharacter;
}
