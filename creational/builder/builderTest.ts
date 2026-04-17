import Director  from "./builderDirector";
import { ComputerBuilder } from "./computerBuilder";

function builderTest() {
    const builder = new ComputerBuilder();
    const director = new Director();
    director.setBuilder(builder);

    director.buildGamingPC();
    const gamingPC = builder.getResult();
    gamingPC.showComputer();

    director.buildOfficePC();
    const officePC = builder.getResult();
    officePC.showComputer();

    builder.setCPU("AMD Ryzen 5");
    builder.setRAM("16GB");
    builder.setStorage("1TB SSD");
    builder.setGPU("RTX 3060");
    const customPC = builder.getResult();
    customPC.showComputer();
}

export default builderTest;