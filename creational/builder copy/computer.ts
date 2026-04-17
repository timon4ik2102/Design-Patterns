class Computer {
    private ram: string;
    private cpu: string;
    private gpu: string;
    private storage: string;


    private constructor(cpu: string, ram: string, storage: string, gpu: string) {
        this.cpu = cpu;
        this.gpu = gpu
        this.storage = storage
        this.ram = ram
    }

    static create (cpu: string, ram: string, storage: string, gpu: string) {
        return new Computer(cpu, ram, storage, gpu) 
    }

    public showConputer(): void  {
        console.log(`Computer - CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}, GPU: ${this.gpu}`);
    }
}

export default Computer;