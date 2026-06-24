import IElement from "./elementInterface";
import IVisitor from "./visitorInterface";

class User implements IElement {
    accept(visitor: IVisitor): void {
        visitor.visitUser(this);
    }
}

export default User;
