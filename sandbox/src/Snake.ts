import display from "./display";
import Point from "./Point";
class Snake {
  private currentPosition: Point;
  private currentDirection: number;

  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
  }
  /**
   * @deprecated Use {turn}
   */
  public turn() {
    this.currentDirection *= -1;
  }
  public turnLeft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 0; // Facing right
    } else if (this.currentDirection === 0) {
      this.currentDirection = -1; // Facing down
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1; // Facing up
    }
  }

  public turnRight() {
    if (this.currentDirection === 1) {
      this.currentDirection = 0;
    } else if (this.currentDirection === 0) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }
  public move(steps: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.position.x,
        this.position.y + steps,
      );
    } else if (this.currentDirection === 0) {
      this.currentPosition = new Point(
        this.position.x + steps,
        this.position.y,
      );
    } else if (this.currentDirection === -1) {
      this.currentPosition = new Point(
        this.position.x,
        this.position.y - steps,
      );
    } else {
      this.currentPosition = new Point(
        this.position.x - steps,
        this.position.y,
      );
    }
  }

  public get position(): Point {
    return this.position;
  }
}
export default Snake;
