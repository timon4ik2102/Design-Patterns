import IMemento, { ISaveManager } from "./mementoInterface";

class SaveManager implements ISaveManager {
    private saves: IMemento[] = [];

    store(save: IMemento): void {
        this.saves.push(save);
    }

    getLastSave(): IMemento | undefined {
        if (this.saves.length === 0) {
            return undefined;
        }

        return this.saves[this.saves.length - 1];
    }
}

export default SaveManager;
