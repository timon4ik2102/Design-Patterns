import { ICharacter } from "./interfaces";

class Character implements ICharacter {
    constructor(
        public symbol: string
      ) {}

    draw(position: number) {
        console.log(
          `Draw "${this.symbol}" at ${position}`
        );
      }
}

export default Character;
