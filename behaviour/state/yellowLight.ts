import State from "./stateInterface";
import TrafficLight from "./trafficLight";

class YellowLight implements State {
    handle(_context: TrafficLight): void {
        console.log('Yellow light is on');
    }
}

export default YellowLight;