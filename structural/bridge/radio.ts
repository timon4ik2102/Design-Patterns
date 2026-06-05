import IDevice from "./deviceInterface";

class Radio implements IDevice {
    getName(): string {
        return 'Radio';
    }

    turnOn(): void {
        console.log('Radio is playing');
    }

    turnOff(): void {
        console.log('Radio is silent');
    }
}

export default Radio;
