import PizzaTemplate from "./pizzaTemplate";

class PepperoniPizza extends PizzaTemplate {
    protected getName(): string {
        return 'Pepperoni';
    }

    protected addSauce(): void {
        console.log('Spread tomato sauce');
    }

    protected addExtraIngredients(): void {
        console.log('Add pepperoni and extra cheese');
    }
}

export default PepperoniPizza;
