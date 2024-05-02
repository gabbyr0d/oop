import CollisionHandler from "./CollisionHandler";
import Snake from "./Snake";
class SnakeSnakeCollisionHandler implements CollisionHandler {
  public applyAction(snake1: Snake, snake2: Snake) {
    snake1.die();
  }
}
export default SnakeSnakeCollisionHandler;
