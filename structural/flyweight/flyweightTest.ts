import TextCharacter from "./textCharater";
import CharacterFactory from "./characterFactory";

function flyweightTest() {
    const factory = new CharacterFactory();
    const characterA = factory.getCharacter('A');
    const characterAAgain = factory.getCharacter('A');
    const characterB = factory.getCharacter('B');
    const characterBAgain = factory.getCharacter('B');


    console.log('Same flyweight instance:', characterA === characterAAgain);

    const textCharacter = new TextCharacter(1, characterA);
    const textCharacter2 = new TextCharacter(2, characterAAgain);
    const textCharacter3 = new TextCharacter(3, characterB);
    const textCharacter4 = new TextCharacter(4, characterBAgain);
    textCharacter.draw();
    textCharacter2.draw();
    textCharacter3.draw();
    textCharacter4.draw();
}

export default flyweightTest;