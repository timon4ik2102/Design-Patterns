import { ISubscriber } from "./subsriberInterface";

class YoutubeChannel {
    private subscribers: ISubscriber[] = [];

    addSubscriber(subscriber: ISubscriber): void {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: ISubscriber): void {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    notifySubscribers(videoTitle: string): void {
        this.subscribers.forEach(subscriber => subscriber.update(videoTitle));
    }
}

export default YoutubeChannel;
