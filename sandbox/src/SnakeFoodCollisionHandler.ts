import CollisionHandler from "./CollisionHandler";
import Food from "./Food";
import Snake from "./Snake";
class SnakeFoodCollisionHandler implements CollisionHandler {
  public applyAction(snake: Snake, food: Food) {
    food.eat();
    snake.grow();
  }
}
export default SnakeFoodCollisionHandler;
