import display from "./display";
class Point {
  private xcoord: number;
  private ycoord: number;

  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public equals(p: Point): boolean {
    return this.x === p.x && this.y === p.y;
  }
  public get x(): number {
    return this.xcoord;
  }

  public get y(): number {
    return this.ycoord;
  }
}
export default Point;
