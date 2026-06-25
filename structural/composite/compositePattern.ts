import ICarPart from "./interfaceCar";

class CompositePattern implements ICarPart {
    constructor(private parts: ICarPart[]) {
    }

    addPart(part: ICarPart) {
        this.parts.push(part);
    }

    showDetails(): string {
        return this.parts.map(part => part.showDetails()).join(', ');
    }
}

export default CompositePattern;