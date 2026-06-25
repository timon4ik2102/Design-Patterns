import TrafficLight from "./trafficLight";
import RedLight from "./redLight";
import YellowLight from "./yellowLight";
import GreenLight from "./greenLight";

function stateTest() {
    const trafficLight = new TrafficLight(new RedLight());
    trafficLight.request();
    trafficLight.setState(new YellowLight());
    trafficLight.request();
    trafficLight.setState(new GreenLight());
    trafficLight.request();
}

export default stateTest;
