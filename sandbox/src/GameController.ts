import WorldModel from "./WorldModel";
import Player from "./Player";
export class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;
  constructor(worldModel: WorldModel) {
    this.world = worldModel;
  }
  public setPlayer1(player: Player) {
    this.player1 = player;
  }
  public setPlayer2(player: Player) {
    this.player2 = player;
  }
  public run() {
    let lastTime = 0;
    const updateFrame = () => {
      if (this.player1) {
        this.player1.makeTurn();
      }
      if (this.player2) {
        this.player2.makeTurn();
      }
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;
      if (deltaTime > 250) {
        this.world.update(1);
        lastTime = currentTime;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
}
export default GameController;
