import Student from "./student";
import WalkTravel from "./walkTravel";
import CarTravel from "./carTravel";
import BusTravel from "./busTravel";

function strategyTest() {
    const student = new Student(new WalkTravel());
    student.travel();
    student.setTravelStrategy(new CarTravel());
    student.travel();
    student.setTravelStrategy(new BusTravel());
    student.travel();
}

export default strategyTest;
