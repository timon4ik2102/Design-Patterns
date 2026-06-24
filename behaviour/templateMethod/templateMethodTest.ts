import MargheritaPizza from "./margheritaPizza";
import PepperoniPizza from "./pepperoniPizza";

function templateMethodTest() {
    const margherita = new MargheritaPizza();
    const pepperoni = new PepperoniPizza();

    margherita.makePizza();
    pepperoni.makePizza();
}

export default templateMethodTest;
