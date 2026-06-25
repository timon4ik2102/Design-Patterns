import { ISubscriber } from "./subsriberInterface";

class User implements ISubscriber {
    constructor(public name: string) {}

    update(videoTitle: string): void {
        console.log(`User ${this.name} notified about ${videoTitle}`);
    }
}

export default User;
