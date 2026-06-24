import CandyBox from "./candybox";
import ICandyBox from "./candyInterface";

class CandyPattern implements ICandyBox {
    private candyBox: CandyBox;
    private hasAccess: boolean;

    constructor(hasAccess: boolean) {
        this.hasAccess = hasAccess;
        this.candyBox = new CandyBox();
    }



    getCandy(): string {
        if (!this.hasAccess) {
            throw new Error("Access denied");
        }

        return this.candyBox.getCandy();
    }
}

export default CandyPattern;
