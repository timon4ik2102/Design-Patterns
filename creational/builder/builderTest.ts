import Director from "./builderDirector";
import { ComputerBuilder } from "./computerBuilder";

function builderTest() {
    const builder = new ComputerBuilder();
    const director = new Director();
    director.setBuilder(builder);

    director.buildOfficePC();
    builder.getProduct().listParts();

    director.buildGamingPC();
    builder.getProduct().listParts();


    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

export default builderTest;
