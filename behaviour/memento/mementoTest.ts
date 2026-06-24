import GameCharacter from "./gameCharacter";
import SaveManager from "./saveManager";

function mementoTest() {
    const hero = new GameCharacter(100, 1, "Forest");
    const saveManager = new SaveManager();

    hero.showStatus();
    hero.fight();
    saveManager.store(hero.save());
    hero.showStatus();
    hero.enterToTheDesert();
    hero.fight();
    hero.fight();
    hero.showStatus();

    const lastSave = saveManager.getLastSave();
    if (lastSave) {
        hero.restore(lastSave);
    }

    hero.showStatus();
}

export default mementoTest;
