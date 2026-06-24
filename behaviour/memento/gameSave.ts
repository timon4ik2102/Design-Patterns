import IMemento from "./mementoInterface";

class GameSave implements IMemento {
    constructor(
        readonly hp: number,
        readonly level: number,
        readonly location: string
    ) {}
}

export default GameSave;
