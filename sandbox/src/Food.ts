import display from "./display";
import Snake from "./Snake";
import Point from "./Point";
import IActor from "./IActor";
class Food implements IActor {
  private currentPosition: Point;
  private isCurrentlyActive: boolean;
  constructor(x: number, y: number) {
    this.currentPosition = new Point(x, y);
    this.isCurrentlyActive = true;
  }
  public eat() {
    this.isCurrentlyActive = false;
  }
  public update() {}
  public get position() {
    return this.currentPosition;
  }
  public get isActive() {
    return this.isCurrentlyActive;
  }
  public get type() {
    return "food";
  }
}
export default Food;

