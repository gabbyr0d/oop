import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
interface IWorldView {
  display: (w: WorldModel) => void;
}

export default IWorldView;
