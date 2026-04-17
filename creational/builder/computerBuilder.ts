import { Computer } from "./computer";

export interface IComputerBuilder {
    reset(): void;
    setCPU(cpu: string): void;
    setRAM(ram: string): void;
    setStorage(storage: string): void;
    setGPU(gpu: string): void;
    getResult(): Computer;
}

export class ComputerBuilder implements IComputerBuilder {
    private cpu: string = "";
    private ram: string = "";
    private storage: string = "";
    private gpu: string = "";


    public reset(): void {
        this.cpu = "";
        this.ram = "";
        this.storage = "";
        this.gpu = "";
    }

    public setCPU(cpu: string): void {
        this.cpu = cpu;
    }

    public setRAM(ram: string): void {
        this.ram = ram;
    }

    public setStorage(storage: string): void {
        this.storage = storage;
    }

    public setGPU(gpu: string): void {
        this.gpu = gpu;
    }

    public getResult(): Computer {
         if (!this.cpu || !this.ram || !this.storage || !this.gpu) {
            throw new Error("Computer is not configured");
         }
        return Computer.createComputer(this.cpu, this.ram, this.storage, this.gpu);
    }
}   