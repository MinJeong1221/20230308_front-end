/*
  배열의 고차함수

    고차함수(Higher Order Function)
      - 함수를 반환하거나 인자로 전달받는 함수
        => JS는 함수를 값으로 취급하기 때문에 가능하다
        => JS의 함수는 일급객체이다.(구글 검색)
        => 단순하게 콜백함수라고 할수있다.
  
*/

// 함수를 반환하는 함수
function foo() {
  return function () {
    console.log("안녕");
  };
}

let bar = foo(); //foo()의 실행결과로 함수를 반환, bar변수에 할당
bar();

// 전달 받은 숫자 n만큼 코트(콜백함수)를 반복 실행하는 repeat함수 만들기
function repeat(num, callback) {
  for (let i = 0; i < num; i++) {
    callback(i);
  }
}
repeat();

let nums = [1, 2, 3, 4, 5];

// 배열의 크기만큼 반복, 가독성이 다소 떨어진다.
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

/* 
  Array.prototype.forEach(function(요소, 인덱스){ });
    - 배열의 각 요소를 순회하면서 콜백함수를 실행한다
      => 배열의 크기만큼 반복실행된다.
    - 인자로 콜백함수를 전달한다.
      => 콜백함수의 첫번째 매개변수에는 배열의 각 요소들이 한번씩 전달되어 설정된다.
      => 콜백함수의 두번째 인자로 요소의 인덱스값이 전달된다.
    - 배열의 요소를 값으로 사용하며 단순히 반복실행한다.
    - return되는 값이 없다.
*/

let fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit, index) {
  console.log(index, fruit);
});

// 안녕하세요 저는 age세 name입니다. 형식으로 각 요소를 모두 출력
let users = [
  { name: "cho", age: 31 },
  { name: "min", age: 26 },
  { name: "jeong", age: 37 },
];

users.forEach(function (user) {
  console.log(`안녕하세요 저는 ${user.age}세 ${user.name}입니다.`);
});

let result = users.forEach(function (user) {
  console.log(`안녕하세요 저는 ${user.age}세 ${user.name}입니다.`);
});

users.forEach((user) => {
  console.log(`안녕하세요 저는 ${user.age}세 ${user.name}입니다.`);
});

console.log(result); //반환되는 값이 없다.

/*
  Array.prototype.filter(function(요소){});
    - forEach와 마찬가지로 배열을 순회하며 실행된다.
    - 특정 조건을 만족하는 요소만들 모아서 새로운 배열로 반환한다.
      => 인자로 전달된 콜백함수의 return값이 true나 false여야 된다. 즉 조건식이여야 된다.
      => 콜백함수 return 값이 true인 요소만 배열로 모아서 반환한다.
    - 원본 배열이 변경되지 않는다.
*/

let oldUsers = users.filter(function (user) {
  return user.age >= 30;
});

let oldUsers2 = users.filter((user) => user.age >= 30);

console.log("oldUsers : ", oldUsers);
console.log("=> : ", oldUsers2);
console.log("users : ", users);

/*
  Array.prototype.map(function(요소){});
    - forEach의 마찬가지로 배열을 순회하며 실행된다.
    - 요소의 값을 통해서 새로운 값을 만들어 배열로 모아서 반환한다.
      => 콜백함수의 return값이 새로운 배열이 요소 모여서 반환된다.
      => return값이 없으면 undefined가 배열로 모인다.
    - 원본배열을 변경하지 않는다.
*/

let doubleNums = nums.map(function (num) {
  console.log(num);
  return num * 2;
});

console.log(doubleNums);
console.log(nums);

// users에서 이름만 모인 nameList 배열 만들기

let nameList = users.map(function (user) {
  console.log(user.name);
  return user.name;
});

let nameList2 = users.map((user) => user.name);

console.log(nameList);
console.log("=>", nameList2);

/*
  Array.prototype.reduce(function(이전회차 값, 현재회차 값){},초기값);
    - 결과를 누적시키는 누산기를 사용한다.
    - 콜백 함수의 첫번째 매개변수에는 이전 회차의 값, 두번째 현재 회차의 값.
      => 첫번째 회차에서는 이전값에 초기값이 전달된다.
    - 콜백함수 세번째 매개변수는 초기값을 설정한다.
*/

let total = nums.reduce(function (acc, curr) {
  return acc * curr;
}, 1);

let total2 = nums.reduce(add, 0);

function add(a, b) {
  return a + b;
}

console.log(total, total2);

// users => age가 30이상인 객체이 이름만 oldUserNames 배열로 모으기

// let filterArr = users.filter((user) => user.age >= 30);
// let oldUserNames = users.map((user) => user.name);

// 메서드 체이닝 : 메서드의 반환값에 따라 바로 메서드를 이용해서 사용
let oldUserNames = users
  .filter((user) => user.age >= 30)
  .map((user) => user.name);

console.log(oldUserNames);

/*
  유사배열 : 배열처럼 key값이 인덱스이고 length 프로퍼티를 갖는 객체.
    - 이름처럼 배열과 유사하지만 배열은 아니기 때문에 배열의 다른 함수들을 사용하는 것이 불가하다.
      => HTMLCollection, NodeList 등...
*/

let arrLike = {
  0: "cho",
  1: "min",
  2: "jeong",
  length: 3,
};

console.log(arrLike[0]);

// arrLike.forEach((item) => console.log(item)); //배열이 아니기 때문에 forEach함수가 없다.

/*
  Array.from(유사 배열);
    - 유사배열 혹은 반복가능한 객체(이터러블)를 배열로 만들어서 반환한다.
*/
let arr = Array.from(arrLike);
console.log(arr);
arr.forEach((item) => console.log(item));

/*
  원시값과 참조값
  
  원시값(Primitive)
    - 변경이 불가능한 값
    - String, Number, Boolean, undefined, nulll
    - 복사를 하면 값 복사가 일어난다.

  객체타입 : 참조값(Reference)  
    - 변경이 가능한 값
    - Array, Function등이 모두 객체에 포함된다.
    - 복사를 하면 주소 복사가 일어난다.
    - 객체의 프로퍼티가 객체인 경우는 얕은복사와 깊은복사의 차이가 있다.
      => 얕은 복사 : 겉에만 값 복사가 일어나고 프로퍼티가 객체인 경우 참조 복사가 일어난다.
      => 깊은 복사 : 프로퍼티가 객체인 경우 값 복사가 일어나게 재귀적으로 복사가 일어난다.
*/

let num = 1;
let copyNum = num;
copyNum = 2;
console.log("num : ", num);
console.log("copy : ", copyNum);

let list = [1, 2, 3];
let copyList = list;
copyList.push(4);

console.log("list : ", list);
console.log("copyList : ", copyList);
console.log("list === copyList", list === copyList); // 주소 복사가 일어나기 때문에 둘은 같다.

let copyList02 = list.slice(); // 처음부터 끝까지 복사.
console.log(copyList02);
console.log("list === copyList02", list === copyList02);

//

let obj = {
  name: {
    last: "Seok",
    first: "Hwangbo",
  },
};

let copyObj = Object.assign({}, obj);
console.log(obj, copyObj);
console.log(obj === copyObj);
console.log(obj.name === copyObj.name);
