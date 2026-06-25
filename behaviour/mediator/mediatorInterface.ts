export default interface IMediator {
    sendMessage(message: string, sender: IColleague): void;
}

export interface IColleague {
    setMediator(mediator: IMediator): void;
    send(message: string): void;
    receive(message: string, from: string): void;
    getName(): string;
}
