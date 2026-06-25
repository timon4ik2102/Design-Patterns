import State from "./stateInterface";
import TrafficLight from "./trafficLight";

class GreenLight implements State {
    handle(_context: TrafficLight): void {
        console.log('Green light is on');
    }
}

export default GreenLight;
