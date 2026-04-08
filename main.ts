import Logger from './creational/singleton/logger.ts';
import Character from './creational/prototype/character.ts';
import { FerrariCreator } from './creational/factory/ferrariCreator.ts';
import { FerrariFactory} from './creational/abstractFactory/ferrariFactory.ts';
import { AbstractFactory } from './creational/abstractFactory/abstractFactory.ts';
import { ComputerBuilder } from './creational/builder/computerBuilder.ts';

function singletonTest() {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    logger1.createLog("Hello1");
    logger2.createLog("Hello2");
    console.log(logger1.getLog());
    console.log(logger2.getLog());
    console.log(logger1 === logger2);
}

function prototypeTest() {
    const warrior = new Character("Warrior", 100, 1, ["sword", "shield"]);
    const warrior3 = new Character("Warrior3", 100, 1, ["shield"]);
    const warrior2 = warrior.clone();
    console.log(warrior);
    console.log(warrior2);
    console.log(warrior3);
}

function fabricTest() {
    const ferrariCreator = new FerrariCreator();
    const ferrari = ferrariCreator.createCar("Ferrari F8", 340);
    ferrari.showInfo();
    ferrari.drive();
    ferrari.stop();
}

function createAbstractFactory(factory: AbstractFactory, carName: string, carSpeed: number, engineName: string, engineResource: number,) {
    const car = factory.createCar(carName, carSpeed);
    const engine = factory.createEngine(engineName, engineResource);

    engine.showEngineInfo();
    engine.showResourseOfEngine();
    
    car.showInfo();
    car.drive();
    car.stop();
}

function builderTest() {
    const computerBuilder = new ComputerBuilder();
    const computer = computerBuilder
        .setCPU("Intel Core i9")
        .setRAM("32GB")
        .setStorage("1TB SSD")
        .setGPU("NVIDIA RTX 3080")
        .build();
        console.log(111)

    computer.showComputer();
}

// createAbstractFactory(new FerrariFactory(), 'Ferrari F8', 420, 'ferrari gtb 296', 250000)
// fabricTest();
// singletonTest();
// prototypeTest() 
// builderTest()