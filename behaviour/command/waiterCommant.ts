import Command from "./commandInterface";

class Waiter {
    takeOrder(command: Command): void {
      command.execute();
    }
}

export default Waiter;