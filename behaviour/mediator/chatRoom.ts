import IMediator, { IColleague } from "./mediatorInterface";

class ChatRoom implements IMediator {
    private users: IColleague[] = [];

    addUser(user: IColleague): void {
        user.setMediator(this);
        this.users.push(user);
    }

    sendMessage(message: string, sender: IColleague): void {
        for (const user of this.users) {
            if (user !== sender) {
                user.receive(message, sender.getName());
            }
        }
    }
}

export default ChatRoom;
