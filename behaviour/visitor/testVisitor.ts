import Admin from "./admin";
import User from "./user";
import PermissionVisitor from "./permissionVisitor";
import MaterialVisitor from "./materialVisitor";

function testVisitor() {
    const admin = new Admin();
    const user = new User();
    const permissionVisitor = new PermissionVisitor();
    const materialVisitor = new MaterialVisitor();

    admin.accept(permissionVisitor);
    admin.accept(materialVisitor);

    user.accept(permissionVisitor);
    user.accept(materialVisitor);
}

export default testVisitor;
