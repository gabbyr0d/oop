import display from "./display";
import IDrivable from "./IDrivable";

// place your code on line 5 above the export statement below
class Car {
  private totalMiles: number;
  public color: string;
  constructor(carColor: string) {
    this.totalMiles = 0;
    this.color = carColor;
  }
  public drive(miles: number) {
    display("The", this.color, "car goes VROOOOOOOMMMMMM....");
    this.totalMiles = this.totalMiles + miles;
  }
  public get miles() {
    return this.totalMiles;
  }
  set miles(newTotalMiles: number) {
    if (newTotalMiles >= 0) {
      this.totalMiles = newTotalMiles;
    } else {
      display("Disregarding attempt to set miles to negative number");
    }
  }
}
//const Car = {}; // replace this line

export default Car;
