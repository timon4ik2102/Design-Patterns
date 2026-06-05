import CandyBox from "./candybox";
import ICandyBox from "./candyInterface";

class CandyPattern implements ICandyBox {
    private candyBox = new CandyBox();

    getCandy(): string {
        return this.candyBox.getCandy();
    }
}

export default CandyPattern;
