import TrafficLight from "./trafficLight";

interface State {
    handle(context: TrafficLight): void;
}

export default State;
