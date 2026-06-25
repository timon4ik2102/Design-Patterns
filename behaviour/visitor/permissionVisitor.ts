import IVisitor from "./visitorInterface";
import Admin from "./admin";
import User from "./user";

class PermissionVisitor implements IVisitor {
    visitAdmin(_admin: Admin): void {
        console.log("Admin can create and delete users");
    }

    visitUser(_user: User): void {
        console.log("User can only view users");
    }
}

export default PermissionVisitor;
