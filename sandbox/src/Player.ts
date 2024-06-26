import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
abstract class Player {
  protected sc: SnakeController;
  constructor(controller: SnakeController) {
    this.sc = controller;
  }
  abstract makeTurn(): void;
  public isActive() {
    return this.sc.isSnakeActive;
  }
}
export default Player;
