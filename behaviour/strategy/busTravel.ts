import { TravelStrategy } from "./travelInterface";

class BusTravel implements TravelStrategy {
    travel(): void {
        console.log('Traveling to the destination by bus');
    }
}

export default BusTravel;
