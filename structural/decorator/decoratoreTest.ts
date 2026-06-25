import Cheese from "./cheese";
import Tomatoes from "./tomatoes";
import Burger from "./burger";

function decoratoreTest() {
    const burger = new Burger();
    const cheeseBurger = new Cheese(burger);
    const fullBurger = new Tomatoes(cheeseBurger);
    console.log(fullBurger.getDescription());
    console.log(fullBurger.getCost());
}

export default decoratoreTest;
