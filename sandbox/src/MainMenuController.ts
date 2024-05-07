import Game from "./Game";
class MainMenuController {
  private game: Game;
  public playGameButton: HTMLButtonElement;
  public humanPlayersInput: HTMLInputElement;
  public aiPlayersInput: HTMLInputElement;
  constructor(game: Game) {
    this.game = game;
    this.playGameButton = document.createElement("button") as HTMLButtonElement;
    this.humanPlayersInput = document.createElement(
      "input",
    ) as HTMLInputElement;
    this.aiPlayersInput = document.createElement("input") as HTMLInputElement;
    this.humanPlayersInput.placeholder = "Enter number of human players";
    this.aiPlayersInput.placeholder = "Enter number of computer players";
    const playGameText = document.createTextNode("Start Game!");
    this.playGameButton.appendChild(playGameText);
    this.playGameButton.addEventListener(
      "click",
      this.switchContext.bind(this),
    );
  }
  public init(data: any): void {
    document.body.appendChild(this.humanPlayersInput);
    document.body.appendChild(this.aiPlayersInput);
    document.body.appendChild(this.playGameButton);
  }
  private switchContext(): void {
    document.body.removeChild(this.humanPlayersInput);
    document.body.removeChild(this.aiPlayersInput);
    document.body.removeChild(this.playGameButton);
    const numOfHumanPlayers = parseInt(this.humanPlayersInput.value);
    const numOfAIPlayers = parseInt(this.aiPlayersInput.value);
    this.game.switchContext({
      numOfHumanPlayers,
      numOfAIPlayers,
    });
  }
}
export default MainMenuController;
