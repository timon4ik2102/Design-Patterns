import Command from "./commandInterface";
import Chef from "./chef";

class CookBurgerCommand implements Command {
    constructor(private chef: Chef) {}

    execute(): void {
        this.chef.cookBurger();
    }
}

export default CookBurgerCommand;
