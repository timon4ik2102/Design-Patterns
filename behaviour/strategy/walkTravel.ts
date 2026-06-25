import { TravelStrategy } from "./travelInterface";

class WalkTravel implements TravelStrategy {
    travel(): void {
        console.log('Walking to the destination');
    }
}

export default WalkTravel;
