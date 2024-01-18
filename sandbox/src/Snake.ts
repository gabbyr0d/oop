import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
  move(squares: number) {
    if (this.currentDirection === 1) {
      this.currentPosition += squares;
    } else {
      this.currentPosition -= squares;
    }
  }
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;
