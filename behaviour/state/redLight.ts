import State from "./stateInterface";
import TrafficLight from "./trafficLight";

class RedLight implements State {
    handle(_context: TrafficLight): void {
        console.log('Red light is on');
    }
}

export default RedLight;
