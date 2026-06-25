interface IDeliveryService {
    startDelivery(): void;
}
export class DeliveryService implements IDeliveryService {
    public startDelivery(): void {
        console.log("Delivery started");
    }
}
