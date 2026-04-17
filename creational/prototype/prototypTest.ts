import Character from "./character";

function prototypeTest() {
    const warrior = new Character("Warrior", 100, 1, ["sword", "shield"]);
    const warrior3 = new Character("Warrior3", 100, 1, ["shield"]);
    const warrior2 = warrior.clone();

    warrior2.inventory.push("helmet");

    console.log("warrior 1 inventory", warrior.inventory);
    console.log("clon warrior inventory", warrior2.inventory);
    console.log("warrior 3 inventory", warrior3.inventory);
}

export default prototypeTest;
