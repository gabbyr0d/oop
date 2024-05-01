import InputHandler from "./IInputHandler";
class LRInputHandler implements InputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;
  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      } else if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }
  public madeLeftMove() {
    return this.wasLeftArrowPushed;
  }
  public madeRightMove() {
    return this.wasRightArrowPushed;
  }
  public resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }
  public resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}
export default LRInputHandler;
