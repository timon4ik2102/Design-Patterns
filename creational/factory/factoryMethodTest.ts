import { FerrariCreator } from "./ferrariCreator";
import { HondaCreator } from "./hondaCreator";  

function factoryMethodTest() {
    const ferrariCreator = new FerrariCreator();
    const ferrari = ferrariCreator.createCar("Ferrari F8", 340);
    ferrari.showInfo();
    ferrari.drive();
    ferrari.stop();

    const hondaCreator = new HondaCreator();
    const honda = hondaCreator.createCar("Honda Civic", 120);
    honda.showInfo();
    honda.drive();
    honda.stop();
}

export default factoryMethodTest;