import PizzaTemplate from "./pizzaTemplate";

class MargheritaPizza extends PizzaTemplate {
    protected getName(): string {
        return 'Margherita';
    }

    protected addSauce(): void {
        console.log('Spread tomato sauce');
    }

    protected addExtraIngredients(): void {
        console.log('Add mozzarella and fresh basil');
    }
}

export default MargheritaPizza;
