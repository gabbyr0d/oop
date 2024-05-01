import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
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
    this.context.fillStyle = "green";
    const snakePosition = worldModel.Snake.position;
    const snakeSize = 1;
    this.context.fillRect(
      snakePosition.x * this.scalingFactor,
      snakePosition.y * this.scalingFactor,
      snakeSize * this.scalingFactor,
      snakeSize * this.scalingFactor,
    );
  }
}
export default CanvasWorldView;
