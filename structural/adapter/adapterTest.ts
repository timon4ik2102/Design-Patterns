import Adapter from "./adapter";
import NewPayment from "./newPayment";
import OldPayment from "./oldPayment";

function adapterTest() {
    const oldPayment = new OldPayment();
    const newPayment = new NewPayment();
    const jjj = newPayment.payNewAmount(100);
    const adapter = new Adapter(oldPayment);
    adapter.payNewAmount(160);
}

export default adapterTest;