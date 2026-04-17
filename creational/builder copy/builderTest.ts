import Director  from "./builderDirector";
import ComputerBuilder  from "./computerBuilder";


function builderTest() {
    const director = new Director ();
    const builder = new ComputerBuilder();
    director.setBuilder(builder);
    director.buildGamingPC();
    director.buildOfficePC();

    const gaming = builder.getComputer();
    const nonGaming = builder.getComputer();

       builder.setCPU("AMD Ryzen 5");
    builder.setRAM("16GB");
    builder.setStorage("1TB SSD");
    builder.setGPU("RTX 3060");

    const myPC = builder.getComputer();
    gaming.showConputer();
    nonGaming.showConputer();
      myPC.showConputer();
}

export default builderTest;