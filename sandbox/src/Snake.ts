import display from "./display";
import Point from "./Point";
import Collidable from "./Collidable";
import Actor from "./Actor";
class Snake implements Collidable {
  private currentPosition: Point;
  private currentDirection: number;
  private startPosition: Point;
  private size: number;
  private currentParts: Point[];
  private isCurrentlyActive: boolean;
  constructor(startPosition: Point, size: number, direction: number) {
    this.startPosition = startPosition;
    this.size = size;
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
    this.currentParts = [];
    this.currentParts.push(startPosition);
    this.isCurrentlyActive = true;
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
  public didCollide(a: Actor): boolean {
    if (this.type !== "snake") {
      return this.position.equals(a.position());
    } else {
      return this.currentParts
        .slice(1)
        .some((part) => this.position.equals(part));
    }
  }
  public update() {
    this.move(1);
  }
  public die() {
    this.isCurrentlyActive = false;
  }
  public grow() {
    if (this.currentDirection === 1) {
      this.currentParts.push(new Point(this.position.x, this.position.y - 1));
    } else if (this.currentDirection === 4) {
      this.currentParts.push(new Point(this.position.x, this.position.y + 1));
    } else if (this.currentDirection === 2) {
      this.currentParts.push(new Point(this.position.x + 1, this.position.y));
    } else if (this.currentDirection === 3) {
      this.currentParts.push(new Point(this.position.x - 1, this.position.y));
    }
  }
  public get position(): Point {
    return this.currentParts[0];
  }
  public get isActive() {
    return this.isCurrentlyActive;
  }

  public get type() {
    return "snake";
  }
}
export default Snake;
