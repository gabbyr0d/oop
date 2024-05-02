import display from "./display";
import Point from "./Point";
import Snake from "./Snake";
import IWorldView from "./IWorldView";
class WorldModel {
  private worldWidth: number;
  private worldHeight: number;
  private allSnakes: Snake[];
  private allViews: IWorldView[];
  constructor(allSnakes: Snake, width: number, height: number) {
    this.worldWidth = width;
    this.worldHeight = height;
    this.allSnakes = [];
    this.allViews = [];
  }

  public update(steps: number): void {
    for (const snake of this.allSnakes) {
      snake.move(steps);
    }

    for (const view of this.allViews) {
      view.display(this);
    }
  }
  public addSnake(snake: Snake): void {
    this.allSnakes.push(snake);
  }

  public addView(view: IWorldView): void {
    this.allViews.push(view);
  }
  public get width(): number {
    return this.worldWidth;
  }
  public get height(): number {
    return this.height;
  }

  public get snakes() {
    return this.allSnakes;
  }
  public set addview(view: IWorldView) {
    this.allViews.push(view);
  }
}
export default WorldModel;
