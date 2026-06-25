import IElement from "./elementInterface";
import IVisitor from "./visitorInterface";

class Admin implements IElement {
    accept(visitor: IVisitor): void {
        visitor.visitAdmin(this);
    }
}

export default Admin;
