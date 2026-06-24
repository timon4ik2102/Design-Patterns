import IVisitor from "./visitorInterface";

export default interface IElement {
    accept(visitor: IVisitor): void;
}
