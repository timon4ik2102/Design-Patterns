import CinemaRequest from "./cinemaInterface";

abstract class Handler {
    protected next: Handler | null = null;
    setNext(handler: Handler): Handler {
        this.next = handler;
        return handler;
    }

    handle(req:CinemaRequest): void {
        if (this.next) {
            return this.next.handle(req);
        }
    }
}

export default Handler;
