import TV from "./tv";
import Radio from "./radio";
import RemoteControl from "./remoteControl";
import AdvancedRemote from "./advancedRemote";

function bridgeTest() {
    const tv = new TV();
    const radio = new Radio();

    const basicTvRemote = new RemoteControl(tv);
    const advancedRadioRemote = new AdvancedRemote(radio);
    const advancedTvRemote = new AdvancedRemote(new TV());

    basicTvRemote.turnOn();
    basicTvRemote.turnOff();

    advancedRadioRemote.turnOn();
    advancedRadioRemote.mute();

    advancedTvRemote.turnOn();
    advancedTvRemote.mute();
}

export default bridgeTest;
