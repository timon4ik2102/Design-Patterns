import type Admin from "./admin";
import type User from "./user";

export default interface IVisitor {
    visitAdmin(admin: Admin): void;
    visitUser(user: User): void;
}
