import OldPayment from "./oldPayment";
import { IPaymentService } from "./newPayment";

 class Adapter implements IPaymentService {

    constructor(private oldPayment: OldPayment) {
    }

    public payNewAmount(amount: number): void {
        this.oldPayment.pay(amount)
    }
}


export default Adapter;