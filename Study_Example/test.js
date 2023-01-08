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

/////////////////백틱을 사용한 문자열구성///////////
const number = 1;
let str = `hello${number}`;
console.log(str);

//////////////////////////////////////////////
/////////////전개 연산자를 활용한 배열 합치기/////////

let array1 = ["A", "B"];
let array2 = ["C", "D"];

let array3 = [...array1, ...array2];
console.log(array3);

////////ES6 문법을 활용한 class 및 객체 생성 사용/////

var redCar = new Car(100); //
redCar.printFuel();

var blueCar = Car.create(50); // static 선언된 정적 메소드는 객체를 생성하지 않아도 바로 호출할 수 있다.
blueCar.printFuel();

//////////////////////////////////////////////
