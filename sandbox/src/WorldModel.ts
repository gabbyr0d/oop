mport display from "./display";
import Snake from "./Snake";
import IWorldView from "./IWorldView";
class WorldModel {
  private snake: Snake;
  private worldWidth: number;
  private worldHeight: number;
  private worldView: IWorldView | null = null;
  constructor(snake: Snake, width: number, height: number) {
    this.snake = snake;
    this.worldWidth = width;
    this.worldHeight = height;
  }

  public update(steps: number): void {
    this.snake.move(steps);
    if (this.worldView) {
      this.worldView.display(this);
    }
  }
  public get width(): number {
    return this.worldWidth;
  }
  public get height(): number {
    return this.height;
  }
  public get Snake(): Snake {
    return this.snake;
  }

  public set view(view: IWorldView) {
    this.worldView = view;
  }
}
export default WorldModel;


