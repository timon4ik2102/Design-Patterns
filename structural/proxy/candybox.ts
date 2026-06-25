import ICandyBox from "./candyInterface";

class CandyBox implements ICandyBox {

    getCandy(): string {
        return 'This is sweet candy'
    }
}

export default CandyBox;
