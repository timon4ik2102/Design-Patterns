import CompositePattern from "./compositePattern";
import Door from "./door";
import Wheel from "./wheel";

export default function compositeTest() {
    const door = new Door('Front Left');
    const doorRight = new Door('Front Right');
    const cylinder = new Wheel('Cylinder');
    const piston = new Wheel('Piston');
    const composite = new CompositePattern([door, doorRight, cylinder, piston]);
    console.log('Car Parts:', composite.showDetails());
}