import Handler from "./handler";
import CinemaRequest from "./cinemaInterface";

class AgeHandler extends Handler {
    handle(req: CinemaRequest): void {
        if (req.age < 18 || req.age > 60) {
            console.log('You are not allowed to enter the cinema');
            return;
        }

        console.log('You are allowed to enter the cinema');
        super.handle(req);
    }
}

export default AgeHandler;
