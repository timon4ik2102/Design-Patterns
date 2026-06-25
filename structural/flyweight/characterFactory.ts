import Character from "./character";

class CharacterFactory {
    private pool = new Map<string, Character>();

    getCharacter(symbol: string): Character {
        if (!this.pool.has(symbol)) {
            this.pool.set(symbol, new Character(symbol));
        }
        return this.pool.get(symbol)!;
    }
}

export default CharacterFactory;
