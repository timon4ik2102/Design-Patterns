import RemoteControl from "./remoteControl";
import IDevice from "./deviceInterface";

class AdvancedRemote extends RemoteControl {
    constructor(device: IDevice) {
        super(device);
    }

    mute(): void {
        console.log(`Remote: mute ${this.device.getName()}`);
    }
}

export default AdvancedRemote;
