import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import Player from "./Player";

class AvoidWallsPlayer extends Player {
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }

  public makeTurn() {
    const snakePosition = this.sc.snakePosition;
    const snakeDirection = this.sc.snakeDirection;

    if (snakeDirection === -1 && snakePosition.x === 0) {
      this.sc.turnSnakeRight();
    } else if (
      snakeDirection === 1 &&
      snakePosition.x === this.sc.worldWidth - 1
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}

export default AvoidWallsPlayer;
