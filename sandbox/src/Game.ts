import MainMenuController from "./MainMenuController";
import Actor from "./Actor";
import Snake from "./Snake";
import IView from "./IView";
import GameController from "./GameController";
class Game {
  private contextSwitches: Map<string, string> = new Map();
  private controllers: Map<string, any>;
  private currentContext: string;
  private actors: Actor[];
  private views: IView[];
  constructor(game: Game, a: Actor[], v: IView[]) {
    this.contextSwitches = new Map([
      ["START", "GAME"],
      ["GAME", "START"],
    ]);
    this.controllers = new Map([
      ["START", "GAME"],
      ["GAME", "START"],
    ]);
    this.currentContext = "START";
    this.actors = a;
    this.views = v;
  }
  public switchContext(data: any) {
    this.currentContext = this.contextSwitches.get(this.currentContext)!;
    const controller = this.controllers.get(this.currentContext);
    controller.init(data);
  }
  public update(deltaTime: number) {}
  public addActor(actor: Actor) {
    this.actors.push(actor);
  }
  public getActors(actor: Actor): Actor[] {
    return this.actors;
  }
  public addView(view: IView): void {
    this.views.push(view);
  }
}
export default Game;
