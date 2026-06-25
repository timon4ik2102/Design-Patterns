import IDevice from "./deviceInterface";

class TV implements IDevice {
    getName(): string {
        return 'TV';
    }

    turnOn(): void {
        console.log('TV is on');
    }

    turnOff(): void {
        console.log('TV is off');
    }
}

export default TV;
