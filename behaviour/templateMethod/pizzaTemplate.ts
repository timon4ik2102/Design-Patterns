import IPizza from "./pizzaInterface";

abstract class PizzaTemplate implements IPizza {
    makePizza(): void {
        console.log(`Making pizza -  ${this.getName()}`);
        this.prepareDough();
        this.addSauce();
        this.addExtraIngredients();
        this.bake();
        this.cutAndServe();
    }

    protected abstract getName(): string;

    protected prepareDough(): void {
        console.log('Preparing pizza dough');
    }

    protected abstract addSauce(): void;

    protected abstract addExtraIngredients(): void;

    protected bake(): void {
        console.log('Bake in oven for 10 minutes');
    }

    protected cutAndServe(): void {
        console.log('Cut into slices and serve');
    }
}

export default PizzaTemplate;
