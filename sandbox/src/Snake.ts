import display from "./display";
import Point from "./Point";
class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  private startPosition: Point;
  private size: number;
  private currentParts: Point[];
  constructor(startPosition: Point, size: number, direction: number) {
    this.startPosition = startPosition;
    this.size = size;
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
    this.currentParts = [];
    this.currentParts.push(startPosition);
  }
  /**
   * @deprecated Use {turn}
   */
  public turn() {
    this.currentDirection *= -1;
  }
  public turnLeft() {
    if (this.currentDirection === 1) {
      this.currentDirection = 0;
    } else if (this.currentDirection === 0) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
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
  move(numberOfSquares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x + numberOfSquares,
        this.currentPosition.y,
      );
    } else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + numberOfSquares,
      );
    } else if (this.currentDirection === -1) {
      this.currentPosition = new Point(
        this.currentPosition.x - numberOfSquares,
        this.currentPosition.y,
      );
    } else {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - numberOfSquares,
      );
    }
  }
  public didCollide(s: Snake): boolean {
    return this.currentParts.some(
      (part, index) => index !== 0 && s.currentParts.includes(part),
    );
  }
  public get position(): Point {
    return this.position;
  }
}
export default Snake;
