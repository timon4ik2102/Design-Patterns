import State from "./stateInterface";

class TrafficLight {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
    }

    getState(): State {
        return this.state;
    }

    request(): void {
        this.state.handle(this);
    }
}

export default TrafficLight;
