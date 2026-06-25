import IBurger from './burger.ts'


class BurgerDecorator implements IBurger {
    constructor(protected burger: IBurger){
    }

    getCost(): number {
        return this.burger.getCost()
     };
    getDescription(): string {
        return  this.burger.getDescription()
    }
}

export default BurgerDecorator;
