import display from "./display";
import IQuacker from "./IQuacker";

// place your code on line 5 above the export statement below
class Duck {
  public totalQuacks: number;
  public color: string;
  constructor(duckColor: string) {
    this.totalQuacks = 0;
    this.color = duckColor;
  }

  quack(quacks: number) {
    display("QUACK!!");
    this.totalQuacks = this.totalQuacks + quacks;
  }
}
export default Duck;
