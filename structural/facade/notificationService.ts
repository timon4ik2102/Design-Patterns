interface INotificationService {
    sendNotification(): void;
}


export class NotificationService implements INotificationService {
    public sendNotification(): void {
        console.log("User notified");
    }
}
