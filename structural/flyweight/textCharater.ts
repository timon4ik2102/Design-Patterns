import { ITextCharacter } from "./interfaces";
import { ICharacter } from "./interfaces";

class TextCharacter implements ITextCharacter {
    constructor(
        public position: number,
        public character: ICharacter
      ) {}

      draw() {
        this.character.draw(this.position);
      }
}

export default TextCharacter;
