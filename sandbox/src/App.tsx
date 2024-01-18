import "./App.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
//import Car from "./Car";
//import Duck from "./Duck";
import Snake from "./Snake";
export default function App() {
  useEffect(() => {
    // Include your display statements to test below

    document.getElementById("output")!.innerText = "OUTPUT:\n";
    //display("hey");
    //const redCar = new Car();
    //const blueCar = new Car();
    //redCar.drive();
    //blueCar.drive();
    //const yellowDuck = new Duck();
    //const brownDuck = new Duck();
    //yellowDuck.quack();
    //brownDuck.quack();
    //const redCar = new Car();
    //const blueCar = new Car();
    // redCar.drive();
    //blueCar.drive();
    //redCar.drive();
    //display("Red car drove a total of:", redCar.totalMiles, "miles");
    //display("Blue car drove a total of:", blueCar.totalMiles, "miles");
    //const yellowDuck = new Duck();
    //const brownDuck = new Duck();
    //yellowDuck.quack();
    //brownDuck.quack();
    //yellowDuck.quack();
    //display("Yellow duck quacked a total of:", yellowDuck.totalQuacks,"quacks",);
    //display("Brown duck quacked a total of:", brownDuck.totalQuacks, "quacks");
    //const redCar = new Car("red");
    //const blueCar = new Car("blue");
    // redCar.drive(40);
    //blueCar.drive(36);
    //redCar.drive(2);
    //display("Red car drove a total of:", redCar.miles, "miles");
    //display("Blue car drove a total of:", blueCar.miles, "miles");
    //const yellowDuck = new Duck("yellow");
    //const brownDuck = new Duck("brown");
    //yellowDuck.quack(4);
    //brownDuck.quack(9);
    //yellowDuck.quack(6);
    //display("Yellow duck quacked a total of:",yellowDuck.totalQuacks,"quacks",);
    //display("Brown duck quacked a total of:", brownDuck.totalQuacks, "quacks");

    const greenSnake = new Snake();
    const yellowSnake = new Snake();
    greenSnake.turn();
    greenSnake.move(3);
    greenSnake.move(1);
    yellowSnake.move(2);
    yellowSnake.turn();
    yellowSnake.turn();
    display("Green snake's current position is: " + greenSnake.position);
    display("Brown snake's current position is: " + yellowSnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
