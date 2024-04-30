import display from "./display";
class Point {
  private readonly xcoord: number;
  private readonly ycoord: number;

  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }

  public get x(): number {
    return this.xcoord;
  }

  public get y(): number {
    return this.ycoord;
  }
}
export default Point;