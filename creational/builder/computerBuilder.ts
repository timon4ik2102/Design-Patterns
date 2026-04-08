import { Computer } from "./computer";

export class ComputerBuilder {
    private cpu: string = "";
    private ram: string = "";
    private storage: string = "";
    private gpu: string = "";

    public setCPU(cpu: string): ComputerBuilder {
        this.cpu = cpu;
        return this;
    }

    public setRAM(ram: string): ComputerBuilder {
        this.ram = ram;
        return this;
    }

    public setStorage(storage: string): ComputerBuilder {
        this.storage = storage;
        return this;
    }

    public setGPU(gpu: string): ComputerBuilder {
        this.gpu = gpu;
        return this;
    }

    public build(): Computer {
        return new Computer(this.cpu, this.ram, this.storage, this.gpu);
    }
}   