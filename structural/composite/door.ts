import ICarPart from "./interfaceCar";

class Door implements ICarPart {
    constructor(private name: string) {}

    showDetails(): string {
        return `${this.name} Door`; 
    }
}

export default Door;