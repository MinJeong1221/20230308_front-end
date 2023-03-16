/*  
  0. 코드 블록
  - {}안에 실행할 코트를 작성한다.
  - 블록 단위로 코드가 실행된다.
  
  01. 조건문
    - 조건에 따라 실행할 코드를 적용한다.

    1. if(조건식){}
      - ()안에 조건식이 true라면  {}를 실행하고 false는 {}실행되지 않는다.
      - ()안에 true나 false로 평가되는 식을 작성한다.
    2. eles{} 
      - eles는 조건이 해당하지 않을 때 실행할 코드를 작성한다.
      - eles문은 마지막에 한개만 와야된다.
    3. eles if(조건식){}
      - if문의 조건이 해당이 안될 때, 다른 조건을 추가할 수 있습니다.
      - eles if(조건식){}는 여러개 추가될 수 있습니다.

    4. switch(비교될 값){}
      - 조건이 아니라 값을 비교하여 일치하는 케이스를 실행한다.
      - case 값 : 실행될 코드
        => 값이 일치하는 case의 코드를 실행한다.
        => 일치하는 case 이후의 case들도 실행된다.
        => 필요한 경우 코드블록을 탈출하는 break문을 통해서 빠져나와야 한다.
      default {} 
        - 기본적으로 실행될 코드이다.  

*/

var age = 25;

// 조건문
// if(){}else if(){}else{}

if (40 > age >= 30) {
  console.log("30대 입니다.");
} else if (50 > age >= 40) {
  console.log("40대 입니다.");
} else {
  console.log("30대랑 40대가 아닙니다.");
}

// if문을 통해서 짝수 홀수 출력하기
var num = 15;

if (num % 2 === 0) {
  console.log("찍수입니다.");
} else {
  console.log("홀수입니다");
}

// switch(){case 값 : 실행코드; break; default: 실행코드;}

var data = ["112", "556"];
switch (typeof data) {
  case "number":
    console.log("numver타입 입니다.");
    break;
  case "string":
    console.log("string타입 입니다.");
    break;
  default:
    console.log("해당하는 데이터 타입이 없음");
}

// Math.floor(실수) => 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
console.log(Math.floor(-5.75)); // -6
console.log(Math.floor(5.75)); // 5

let score = 22;

switch (Math.floor(score / 10)) {
  case 10:
    console.log("A 등급입나다.");
    break;
  case 9:
    console.log("A 등급입나다.");
    break;
  case 8:
    console.log("B 등급입나다.");
    break;
  case 7:
    console.log("C 등급입나다.");
    break;
  case 6:
    console.log("D 등급입나다.");
    break;
  default:
    console.log("F 등급 입니다.");
}
