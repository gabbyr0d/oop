import CollisionHandler from "./CollisionHandler";
import Food from "./Food";
import Snake from "./Snake";
import Actor from "./Actor";
class SnakeFoodCollisionHandler implements CollisionHandler<Snake, Food> {
  public applyAction(snake: Snake, food: Food) {
    food.eat();
    snake.grow();
  }
}
export default SnakeFoodCollisionHandler;
