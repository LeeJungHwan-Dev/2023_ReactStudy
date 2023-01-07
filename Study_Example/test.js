class Car {
  fuel = 0;

  static create(fuel) {
    return new Car(fuel);
  }

  constructor(fuel) {
    this.fuel = fuel;
  }

  printFuel() {
    console.log(this.fuel);
  }
}

const number = 1;
let str = `hello${number}`;
console.log(str);

let array1 = ["A", "B"];
let array2 = ["C", "D"];

let array3 = [...array1, ...array2];
console.log(array3);

var redCar = new Car(100);
redCar.printFuel();
var blueCar = Car.create(50);
blueCar.printFuel();
