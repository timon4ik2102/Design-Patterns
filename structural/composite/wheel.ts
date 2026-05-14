import ICarPart from "./interfaceCar";

class Wheel implements ICarPart {
    constructor(private name: string) {}

    showDetails(): string {
        return `${this.name} Wheel`; 
    }
}

export default Wheel;