import Handler from "./handler";
import CinemaRequest from "./cinemaInterface";

export default class TicketHandler extends Handler {
    handle (req: CinemaRequest) : void {
        if (!req.hasTicket) {
            console.log('You need to buy a ticket');
            return;
        }

        console.log('You have a ticket');
        super.handle(req);
    }
}
