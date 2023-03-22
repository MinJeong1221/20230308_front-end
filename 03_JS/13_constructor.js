/*
  생성자(Constructor)
    - 같은 형태의 객체를 만들 수 있는 틀을 미리 만든다.
    - 생성자는 대문자로 시작한다.(파스칼 케이스)
    - 함수 내부에서 this를 통해 프로퍼티를 할당하면 생성자 함수가 된다.
      => 이때 this가 가리키는 것은 생성될 인스턴스를 사리킨다. 
    - return 값을 생략해도 자동으로 객체를 생성해서 반환한다.

  인스턴스(Instance)
    - 생성자를 통해 실제로 만들어진 객체로 실제 메모리에 할당된다.
    - 생성자를 new 키워드와 함께 호출하면 인스턴스가 생성된다.
      => 생성된 인스턴스마다 프로퍼티 값이 다르다.

*/

// 객체 리터럴 방식 : {}기호를 이용하여 간단하게 객체 생성
//  - 같은 형태의 객체를 만들 때 직접 작성해야 한다는 단점이 있다.
let user01 = {
  name: "cho",
  age: 31,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};
let user02 = {
  name: "min",
  age: 26,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user01.hello();
user02.hello();

function User(name, age) {
  this.name = name;
  this.age = age;

  //hello메서드 만들기
  this.hello = function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  };
}

let user03 = new User("jeong", 21);
let user04 = new User("mjeong", 26);

console.log(user03);
console.log(user04);

// prototype : 인스턴스가 공동으로 사용할 메서드, 프로퍼티를 상속시켜준다.

// 프로토타입 메서트 : 인스턴스가 프로토타입에게 상속받아 사용하는 메서드
User.prototype.hello = function () {
  console.log(`안녕하세요 저는 ${this.name}입니다.`);
};

user03.hello();

// 정적(static) 메서드 : 생성자 함수를 통해 직접 호출하는 메서드 => 인스턴스는 호출불가, 상속이 안됨
User.isUser = function (obj) {
  return obj instanceof User;
};

console.log("user03 is User?", User.isUser(user03));
console.log("user01 is User?", User.isUser(user01));

Math.PI; // Math의 정적 프로퍼티

// Cat 생성자 작성해보기
// age, color 프로퍼티, cry 프로토타입 메서드 만들기("야옹~~~" 출력).

function Cat(age, color) {
  this.age = age;
  this.color = color;
}

Cat.prototype.cry = function () {
  console.log(`야옹~~~`);
};

let cat01 = new Cat(21, "블랙");
let cat02 = new Cat(21, "화이트");

console.log(cat01);
cat01.cry();
cat02.cry();

/*
  클래스(Class)
    - 생성자 함수와 동일한 역할을 한다.
    - 다른 객체지향 프로그래밍 언너에서 흔히 사용하는 클래스 개념을 도입했다.
      => 새로운 개념이 아니라 프로토타입 기반인 것은 동일하다.
      => 문법적으로 사용하기 쉽게 만들어진 것으로 이를"문법적 설탕"이라고 표현한다.
    - class라는 키워드를 사용한다.
      => ()를 사용하지 않는다.
    - new 키워드와 함께 클래스를 호출하면 constructor가 객체를 초기화 한다.
      => 초기화할 값이 없다면 constructor 생략이 가능하다.
      => JS가 내부적으로 자동으로 constructor를 생성한다.
*/

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 프로토타입 메서드 선언
  hello() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  }

  static isPlayer(obj) {
    return obj instanceof Player;
  }
}

let player = new Player("min", 26);
console.log(player);

class Animal {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
  }
  eat() {
    console.log("밥을 먹습니다.");
  }
}

/*
  클래스의 상속
    - 상위 클래스를 상속받아서 메서드 등을 사용할 수 있다.
    - 상속받을 때 constructor을 작성하면 내부에 super(상위클래스의 constructor)를 호출해야한다.
*/

class Dog extends Animal {
  constructor(legs, color) {
    super(legs, color);
  }
  bow() {
    console.log("멍멍");
  }
}

let dog = new Dog(4, "black");

console.log(dog);
dog.eat();
dog.bow();

//
class Bird extends Animal {
  constructor(color) {
    super(2, color);
  }
  fly() {
    console.log("날아가요~~");
  }
}

let bird = new Bird("yellow");

console.log(bird);
bird.eat();
bird.fly();

// Car클래스 만들기 color speed gas - move(이동거리) 호출하면 ?km/h 속도로 km 이동 남은연료 연료량 출력수 실제 연료
// gas가 모자라면 연료가 부족합니다 출력
// getGas(연료) 주유 연료 증가

class Car {
  constructor(color, speed, gas, eco) {
    this.color = color;
    this.speed = speed;
    this.gas = gas;
    this.eco = eco;
  }
  move(distans) {
    if (this.gas > distans / this.eco) {
      this.gas -= distans / this.eco;
      console.log(
        `${this.speed}km/h속소로 ${distans}이동, 남은연료 : ${this.gas}`
      );
    } else {
      console.log("연료가 부족합니다");
    }
  }
}

let car = new Car("red", 100, 50, 10);
car.move(10);
car.move(30);
car.move(400);
car.move(100);
console.log(car);
