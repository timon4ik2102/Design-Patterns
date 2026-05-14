import Director from "./builderDirector";
import { ComputerBuilder } from "./computerBuilder";

function builderTest() {
    const builder = new ComputerBuilder();
    const director = new Director();
    director.setBuilder(builder);

    console.log('Standard minimal product:');
    director.buildOfficePC();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildGamingPC();
    builder.getProduct().listParts();

    // The Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

export default builderTest;
