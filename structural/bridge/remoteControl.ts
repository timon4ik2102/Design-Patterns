import IDevice from "./deviceInterface";

class RemoteControl {
    constructor(protected device: IDevice) {}

    turnOn(): void {
        console.log(`Remote controls ${this.device.getName()}`);
        this.device.turnOn();
    }

    turnOff(): void {
        console.log(`Remote controls ${this.device.getName()}`);
        this.device.turnOff();
    }
}

export default RemoteControl;
