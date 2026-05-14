export interface IPaymentService {
    payNewAmount(amount: number): void;
}

export class NewPayment implements IPaymentService {

    public payNewAmount(amount: number): void {
        console.log(`Paying ${amount} using NEW only NEW payment method`);
    }
}

export default NewPayment;