import Player from "./Player";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";
import HumanPlayer from "./HumanPlayer";
import Snake from "./Snake";
import Game from "./Game";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import Actor from "./Actor";
import IView from "./IView";
export class GameController {
  private snake: Snake;
  private player1: Player | null = null;
  private player2: Player | null = null;
  private game: Game;
  private actors: Actor[];
  private views: IView[];
  constructor(g: Game, snake: Snake, a: Actor[], v: IView[]) {
    let ActorCollision = new ActorCollisionHandlers();
    let SnakeFoodCollision = new SnakeFoodCollisionHandler();
    let SnakeSnakeCollision = new SnakeSnakeCollisionHandler();
    ActorCollision.addCollisionAction(
      "snake",
      "food",
      typeof SnakeFoodCollision,
    );
    ActorCollision.addCollisionAction(
      "snake",
      "snake",
      typeof SnakeSnakeCollision,
    );
    this.game = g;
    this.snake = snake;
    this.actors = a;
    this.views = v;
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
        this.game.update(1);
        lastTime = currentTime;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
  public addActor(actor: Actor) {
    this.actors.push(actor);
  }

  public init(data: any) {
    for (let i = 0; i < data.numOfHumanPlayers; i++) {
      const startPosition = new data(10, 10);
      const initialDirection = data.Direction.Up;
      const size = 3;
      const snake = new Snake(startPosition, initialDirection, size);
      const humanInputSource = new data.KeyboardInputSource();
      const snakeController = new data.SnakeController(snake);
      const player = new HumanPlayer(snakeController, humanInputSource);
    }
    for (let i = 0; i < data.numOfAIPlayers; i++) {
      const startingPosition = data.generateStartPosition();
      const initialDirection = data.generateInitialDirection();
      const size = 3;
      const snake = new Snake(startingPosition, initialDirection, size);
      const player = new AvoidWallsPlayer(new data.SnakeController(snake));
    }
    for (let i = 0; i < this.game.addActor.length; i++) {
      const snake = this.game.getActors(data)[i];
      snake.position;
    }
    const worldView = new data.CanvasView(document.createElement("canvas"));
    document.body.appendChild(worldView.context.canvas);
    this.game.addView(worldView);
    this.run();
  }
}
export default GameController;

