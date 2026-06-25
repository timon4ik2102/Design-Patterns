import CandyProxy from "./candyPattern";

function proxyTest() {
    const candyPattern = new CandyProxy(true);
    console.log(candyPattern.getCandy());

    const candyPattern2 = new CandyProxy(false);
    console.log(candyPattern2.getCandy());
}

export default proxyTest;
