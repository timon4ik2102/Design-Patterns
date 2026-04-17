import { IComputerBuilder } from "./computerBuilder";

 class Director {
    private builder!: IComputerBuilder;

    public setBuilder(builder: IComputerBuilder): void {
        this.builder = builder;
    }

    public buildGamingPC(): void {
        this.builder.setCPU("Intel Core i9-13900K");
        this.builder.setRAM("64GB DDR5");
        this.builder.setStorage("2TB NVMe SSD");
        this.builder.setGPU("NVIDIA RTX 4090");
    }

    public buildOfficePC(): void {
        this.builder.setCPU("Intel Core i3-12100");
        this.builder.setRAM("8GB DDR4");
        this.builder.setStorage("512GB SSD");
        this.builder.setGPU("Integrated Graphics");
    }
}

export default Director;