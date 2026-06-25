import TicketHandler from "./ticketHandler";
import AgeHandler from "./ageHandler";
import MainGateHandler from "./mainGateHandler";

function chainTest() {
    const ticketHandler = new TicketHandler();
    const ageHandler = new AgeHandler();
    const mainGateHandler = new MainGateHandler();

    ticketHandler.setNext(ageHandler).setNext(mainGateHandler);
    ticketHandler.handle({ hasTicket: true, age: 22 });
    ticketHandler.handle({ hasTicket: false, age: 22 });
    ticketHandler.handle({ hasTicket: true, age: 10 });
}

export default chainTest;
