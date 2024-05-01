import display from "./display";
import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  private worldWidth: number;
  private worldHeight: number;
  constructor(snake: Snake, width: number, height: number) {
    this.snake = snake;
    this.worldWidth = width;
    this.worldHeight = height;
  }

  public update(steps: number): void {
    this.snake.move(steps);
  }
  public get width(): number {
    return this.worldWidth;
  }
  public get height(): number {
    return this.height;
  }
}
export default WorldModel;

