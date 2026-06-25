interface IOldPayment {
    pay(amount: number): void
} 

class OldPayment implements IOldPayment {

    public pay(amount: number) : void {
        console.log(` ${amount} from OLD payment method because wea are old`)
    }
 }

export default OldPayment