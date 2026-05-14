interface IOrderService {
    createOrder(): void;
}
export class OrderService implements IOrderService {
    createOrder() {
        console.log("Order created");
    }
}
