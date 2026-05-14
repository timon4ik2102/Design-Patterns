import { OrderService } from './orderService.ts';
import { PaymentService } from './paymentService.ts';
import { DeliveryService } from './deliveryService.ts';
import { NotificationService } from './notificationService.ts';

interface IFacade {
    createOrder(): void;
}

export class Facade implements IFacade {
    private orderService: OrderService;
    private paymentService: PaymentService;
    private deliveryService: DeliveryService;
    private notificationService: NotificationService;

    constructor() {
        this.orderService = new OrderService();
        this.paymentService = new PaymentService();
        this.deliveryService = new DeliveryService();
        this.notificationService = new NotificationService();
    }

    public createOrder(): void {
        this.orderService.createOrder();
        this.paymentService.pay();
        this.deliveryService.startDelivery();
        this.notificationService.sendNotification();

        console.log("Order completed");
    }
}
