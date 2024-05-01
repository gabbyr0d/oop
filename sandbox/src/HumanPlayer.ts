import SnakeController from "./SnakeController";
import Player from "./Player";
import InputHandler from "./IInputHandler";
class HumanPlayer extends Player {
  private controller: SnakeController;
  private handler: InputHandler;
  constructor(sc: SnakeController, ih: InputHandler) {
    super(sc);
    this.controller = sc;
    this.handler = ih;
  }
  makeTurn() {
    if (this.handler.madeLeftMove()) {
      this.controller.turnSnakeLeft();
      this.handler.resetLeftMove();
    }
    if (this.handler.madeRightMove()) {
      this.controller.turnSnakeRight();
      this.handler.resetRightMove();
    }
  }
}
export default HumanPlayer;
