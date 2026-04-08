export class Computer {
    public cpu: string;
    public ram: string;
    public storage: string;
    public gpu: string;

    constructor(cpu: string, ram: string, storage: string, gpu: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
    }

    public showComputer(): void {
        console.log(`Computer - CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}, GPU: ${this.gpu}`);
    }
}


