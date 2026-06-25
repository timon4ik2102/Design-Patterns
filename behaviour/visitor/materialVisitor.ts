import IVisitor from "./visitorInterface";
import Admin from "./admin";
import User from "./user";

class MaterialVisitor implements IVisitor {
    visitAdmin(_admin: Admin): void {
        console.log("Admin can view and change material");
    }

    visitUser(_user: User): void {
        console.log("User can view material");
    }
}

export default MaterialVisitor;
