/*
  배열(Array)
    - 배열을 통해서 여러개의 데이터를 관리
      => 배열 리터럴([])을 사용해서 표현한다.
    - 다른 타입의 데이터를 샅이 사용할 수 있다.
    - 배열의 크기는 (배열이름.length) 알수있다
    - 배열의 크기가 동적으로 변할 수 있다.
    - 인텍스 값을 통해서 특정 요소를 참조할 수 있다.
    - 배열의 요소 추가 제거
      => 배열 마지막 요소를 추가(.push) 제거(.pop)
      => 배열 맨 앞 요소를 추가(.unshift) 제거(.shift)
    - 배열의 중간에 요소를 제거 및 추가 
      => .splice(시작인덱스, 삭제할 개수, 새로 추가할 요소);
    - 배열의 중간 요소를 복사 
      => .slice(시작 인덱스, 끝 인덱스);
      => 끝인덱스를 포함하지 않는다. 원본배열이 변경안됨
    - 요소의 인덱스 값 구하기 
      => .indexOf(찾는 값);
      => 값이 존재하지 않으면 -1을 반환한다.
    - 요소의 존재 유무를 확인 
      => .includes(찾는 값);
      => 요소의 유무에 따라 true false를 반환
  

*/

let dataList = [1, "red", {}];

console.log(dataList.length); //배열의 크기

//배열의 요소 추가 제거
// 배열 마지막 요소를 추가(.push) 제거(.pop)

let nums = [1, 2, 3, 4];

nums.push(5, 6);
console.log("nums.push(5, 6) => nums :", nums); //[ 1, 2, 3, 4, 5, 6 ]

let result = nums.pop(); //맨 마지막 요소 1개를 제거하고 그 값을 반환

console.log("nums.pop()");
console.log("result : ", result); //6
console.log("nums : ", nums); //[ 1, 2, 3, 4, 5 ]

// 배열 맨 앞 요소를 추가(.unshift) 제거(.shift)

nums.unshift(-1, 0);
console.log("nums.unshift => ");
console.log("nums : ", nums); //[-1, 0, 1, 2,3, 4, 5]

result = nums.shift(); //맨 앞의 요소를 제거하고 그 값을 반환
console.log("nums.shift() => ");
console.log("result : ", result); //-1
console.log("nums : ", nums); //[ 0, 1, 2, 3, 4, 5 ]

// 배열의 중간에 요소를 제거 및 추가 : .splice(시작인덱스, 삭제할 개수, 새로 추가할 요소);

result = nums.splice(2, 2, 20, 30);
console.log("nums.splice(2, 2, 20, 30) => ");
console.log("result : ", result); //[ 2, 3 ]
console.log("nums : ", nums); //[ 0, 1, 20, 30, 4, 5 ]

// 배열의 중간 요소를 복사 : .slice(시작 인덱스, 끝 인덱스); 끝인덱스를 포함하지 않는다. 원본배열이 변경안됨

result = nums.slice(3, 5);
console.log("nums.slice(3,5) => "); //4번째 부터 6번재 요소 전까지 복사! 원본배열 변경 안됨
console.log("result : ", result); //[ 30, 4 ]
console.log("nums : ", nums); //[ 0, 1, 20, 30, 4, 5 ]

// 요소의 인덱스 값 구하기 : .indexOf(찾는 값); 값이 존재하지 않으면 -1을 반환한다.

console.log("nums.indexOf(20) : ", nums.indexOf(20));
console.log("nums.indexOf(20) : ", nums.indexOf(50)); //값이 존재하지 않으면 -1 반환

// 요소의 존재 유무를 확인 : .includes(); 요소의 유무에 따라 true false를 반환
console.log("nums.includes(100) : ", nums.includes(100)); //false

// includes함수 구현해보기
Array.prototype.customIncludes = function () {
  console.log(this);
};

nums.customIncludes();

Array.prototype.customIncludes = function (num) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === num) {
      return true;
    }
  }
  return false;
};

console.log(nums.customIncludes(4));

//indexOf함수 구현해보기

Array.prototype.customIndexOf = function (num) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(nums.customIndexOf(4));

console.log(nums.customIndexOf(100));
