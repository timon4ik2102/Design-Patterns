import { Computer } from "./computer";

export interface IComputerBuilder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

export class ComputerBuilder implements IComputerBuilder {
    private product: Computer = new Computer();

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Computer();
    }


    public producePartA(): void {
        this.product.parts.push('CPU: Intel Core i9-13900K');
    }

    public producePartB(): void {
        this.product.parts.push('RAM: 64GB DDR5');
    }

    public producePartC(): void {
        this.product.parts.push('Storage: 2TB NVMe SSD');
    }


    public getProduct(): Computer {
        const result = this.product;
        this.reset();
        return result;
    }
}
