import Command from "./commandInterface";
import Chef from "./chef";

class CookPizzaCommand implements Command {
    constructor(private readonly chef: Chef) {}

    execute(): void {
        this.chef.cookPizza();
    }
}

export default CookPizzaCommand;
