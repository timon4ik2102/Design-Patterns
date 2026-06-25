import { IComputerBuilder } from "./computerBuilder";

class Director {
    private builder!: IComputerBuilder;

    public setBuilder(builder: IComputerBuilder): void {
        this.builder = builder;
    }

    public buildOfficePC(): void {
        this.builder.producePartA();
    }

    public buildGamingPC(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

export default Director;
