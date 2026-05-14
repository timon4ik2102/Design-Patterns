import BurgerDecorator from './burgerDecorator.ts'

class Tomatoes extends BurgerDecorator {

    getCost(): number {
        return this.burger.getCost() + 20
    };

    getDescription(): string {
        return this.burger.getDescription() +  ' with tomatoes'
    }
}

export default Tomatoes;
