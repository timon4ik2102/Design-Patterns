import Handler from "./handler";
import CinemaRequest from "./cinemaInterface";

export default class MainGateHandler extends Handler {
    handle (_req: CinemaRequest) : void {
        console.log('Welcome to the cinema');
    }
}
