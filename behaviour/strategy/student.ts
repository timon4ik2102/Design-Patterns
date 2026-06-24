import { TravelStrategy } from "./travelInterface";

class Student {
    constructor(private travelStrategy: TravelStrategy) {}

    travel(): void {
        this.travelStrategy.travel();
    }

    setTravelStrategy(travelStrategy: TravelStrategy): void {
        this.travelStrategy = travelStrategy;
    }
}

export default Student;
