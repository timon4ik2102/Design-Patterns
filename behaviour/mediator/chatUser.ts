import IMediator, { IColleague } from "./mediatorInterface";

class ChatUser implements IColleague {
    private mediator?: IMediator;

    constructor(private name: string) {}

    setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }

    send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator?.sendMessage(message, this);
    }

    receive(message: string, from: string): void {
        console.log(`${this.name} received from ${from}: ${message}`);
    }

    getName(): string {
        return this.name;
    }
}

export default ChatUser;
