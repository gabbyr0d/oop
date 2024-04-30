import display from "./display";
import Snake from "./Snake";

class WorldModel {
  private snake: Snake;

  constructor(snake: Snake) {
    this.snake = snake;
  }

  public update(steps: number): void {
    this.snake.move(steps);
  }
}
export default WorldModel;
