import Computer from './computer.ts' 

export interface IComputerBuilder  {
    reset(): void;
    setCPU(cpu: string): void;
    setRAM(ram: string): void;
    setStorage(storage: string): void;
    setGPU(gpu: string): void;
    getComputer(): Computer;
}


class ComputerBuilder implements IComputerBuilder {
    private cpu: string = ""
     private ram: string = ""
     private storage: string = ''
     private gpu: string = ''


    public reset() {
        this.cpu = ""
    }

    setCPU(cpu: string ){
         this.cpu = cpu
    }

    setRAM(ram: string ){
         this.ram = ram
    }

    setGPU(gpu: string ){
         this.gpu = gpu
    }

    setStorage(storage: string ){
         this.storage = storage
    }

    public getComputer (): Computer {
        return Computer.create(this.cpu, this.ram, this.storage, this.gpu)
    }



}

export default ComputerBuilder;