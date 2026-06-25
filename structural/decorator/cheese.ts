import BurgerDecorator from './burgerDecorator.ts'

class Cheese extends BurgerDecorator {

    getCost(): number {
        return this.burger.getCost() + 40
    };

    getDescription(): string {
        return this.burger.getDescription() + ' with cheese'
    }
}

export default Cheese;
