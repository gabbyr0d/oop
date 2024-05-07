import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Actor from "./Actor";
import Point from "./Point";
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas")!;
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  public display(worldModel: WorldModel) {
    this.worldCanvas.width = worldModel.width * this.scalingFactor;
    this.worldCanvas.height = worldModel.height * this.scalingFactor;
    for (const snake of worldModel.snakes) {
      for (const part of snake.CurrentParts) {
        this.context.fillStyle = "green";
        const snakePosition = snake.position;
        const snakeSize = 1;
        this.context.fillRect(
          snakePosition.x * this.scalingFactor,
          snakePosition.y * this.scalingFactor,
          snakeSize * this.scalingFactor,
          snakeSize * this.scalingFactor,
        );
      }
    }
  }
  public ScaleFactor(): number {
    return this.scalingFactor;
  }
  public update(actors: Actor[]) {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height,
    );
    for (const actor of actors) {
      if (typeof actor.type === "string" && actor.type === "snake") {
      } else if (typeof actor.type === "string" && actor.type === "food") {
        const position = actor.position();
        const x = position.x * this.ScaleFactor();
        const y = position.y * this.ScaleFactor();
        this.context.fillStyle = "red";
        this.context.fillRect(x, y, this.ScaleFactor(), this.ScaleFactor());
      }
    }
  }
  public dispose() {
    document.body.removeChild(this.context.canvas);
  }
}

