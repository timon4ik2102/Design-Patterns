import { TravelStrategy } from "./travelInterface";

class CarTravel implements TravelStrategy {
    travel(): void {
        console.log('Driving to the destination by car');
    }
}

export default CarTravel;
