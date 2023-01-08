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

const cat = {
  sounds: "meow",
  foo1: function () {
    const foo2 = function () {
      console.log(this.meow);
    };
    foo2();
  },
};

const cat2 = {
  sounds: "meow",
  foo1: function () {
    const foo2 = () => {
      console.log(this.sounds);
    };
    foo2();
  },
};

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

let redCar = new Car(100); //
redCar.printFuel();

let blueCar = Car.create(50); // static 선언된 정적 메소드는 객체를 생성하지 않아도 바로 호출할 수 있다.
blueCar.printFuel();

//////////////////////////////////////////////
///////////////화살표 함수//////////////////////

let sum = (num1, num2) => {
  return num1 + num2;
};

let sum2 = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(1, 2));
console.log(sum2(1, 2));
cat.foo1();
cat2.foo1();

//////////////////////////////////////////////
///////////////구조 분해와 구조 할당///////////////

let list = [0, 1];
let [num1, num2, num3 = -1] = list;

console.log(num1);

let obj = {
  key: "one",
  key2: "two",
};

let { key: newKey, key2, key3 = "default key" } = obj;

console.log(key2);

//////////////////////////////////////////////
///////////////////배열 함수////////////////////

let item = [0, 1, 2, 3, 4, 5];

const item_list = item.forEach((item) => {
  return item;
});

console.log(item_list);

function numberSum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(numberSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//////////////////////////////////////////////
//////////////////비동기 함수///////////////////

function work1() {
  setTimeout(() => console.log("ok"), 100);
}

function urgentWork() {
  console.log("first ok");
}

work1();
urgentWork();
