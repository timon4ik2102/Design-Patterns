import Waiter from "./waiterCommant";
import CookPizzaCommand from "./cookPizzaCommand";
import CookBurgerCommand from "./cookBurgerCommand";
import Chef from "./chef";

function commandTest() {
    const chef = new Chef();
    const cookPizzaCommand = new CookPizzaCommand(chef);
    const cookBurgerCommand = new CookBurgerCommand(chef);
    const waiter = new Waiter();

    waiter.takeOrder(cookPizzaCommand);
    waiter.takeOrder(cookBurgerCommand);
}

export default commandTest;
