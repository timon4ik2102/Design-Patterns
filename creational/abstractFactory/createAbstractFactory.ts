export default function createAbstractFactory(factory: AbstractFactory, carName: string, carSpeed: number, engineName: string, engineResource: number,) {
    const car = factory.createCar(carName, carSpeed);
    const engine = factory.createEngine(engineName, engineResource);

    engine.showEngineInfo();
    engine.showResourseOfEngine();

    car.showInfo();
    car.drive();
    car.stop();
}