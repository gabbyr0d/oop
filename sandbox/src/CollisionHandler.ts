import display from "./display";
import Snake from "./Snake";
import Actor from "./Actor";
interface CollisionHandler<T, U> {
  applyAction(actor: T, actor2: U): void;
}

export default CollisionHandler;
