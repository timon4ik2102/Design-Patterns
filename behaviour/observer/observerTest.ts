import User from "./user";
import YoutubeChannel from "./youtubeChannel";

function observerTest() {
    const user = new User('Roman');
    const youtubeChannel = new YoutubeChannel();
    youtubeChannel.addSubscriber(user);
    youtubeChannel.notifySubscribers('New video released');
}

export default observerTest;