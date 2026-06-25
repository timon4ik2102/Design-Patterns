import { Facade } from "./facadeDecorator";

function testFacade() {
    const facade = new Facade();
    facade.createOrder();
}

export default testFacade;
