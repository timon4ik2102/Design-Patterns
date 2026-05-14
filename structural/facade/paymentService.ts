interface  IPaymentService {
    pay(): void;
}
export class PaymentService implements IPaymentService {
    public pay(): void {
        console.log("Payment processed");
    }
}
