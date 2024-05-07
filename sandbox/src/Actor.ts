import display from "./display";
import Snake from "./Snake";
import Point from "./Point";
interface Actor {
  update: () => void;
  position: () => Point;
  type: () => string;
}
export default Actor;
