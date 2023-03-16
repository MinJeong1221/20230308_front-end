/*
  문
    - 프로그램이 실행되는 최소 단위.

  식
    - 값으로 평가되는 모든 문

  연산자(Operator)
    - 피연산자에 연산을 통해서 새로운 값을 생성한다.
  
  피연산자(Operand)
    - 연산에 사용되는 값

  할당 연산자(=)
    - 우항의 값을 좌항에 할당한다.  
   
  산술 연산자(+, -, *, /, %(나머지연산자))
    - 피연산자에 산술된 값을 반환한다.
    - 사칙연산이 된다(*, /가 먼저 계산 +, -를 먼저 계산하고 싶으면 ()안에 넣어준다.)
  
  단항 연산자 (++, --)
    - 피연산자가 하나인 연산자.
    - 20++ 후위 연산자 : 값을 먼저 사용하고 마지막에 자신을 증가시킨다. 우선순위가 마지막이다.
    - ++20 전위 연산자 : 값을 먼저 증가시키고 사용한다. 우선순위가 최우선이다.

  연결 연산자(문자열)
    - + 사용 => 문자열을 연결한다.
      => - 사용하면 문자열을 숫자로 변경해서 사용한다.
    - 문자열과 숫자에 +를 사용하면 연결 연산자로 동작한다.(예상치 못한 오류가 발생할수도 있어 좋은점은 아니다.)
    - parseInt(문자열) => 숫자로 변환 가능한 문자열을 숫자형으로 바꿔준다.

    
    동등 연산자(==)    
    - 우항과 좌항의 값이 동등한지 비교한다.
    - JS가 자동으로 형변환을 하기 때문에, 다른 자료형의 값을 비교할 때 주의해야된다.
    
    일치 연산자(===)  
    - 우항과 좌하으이 값이 완전히 일치하는지 비교한다.  
    - 형변환을 거치지 않고 비교한다.
    
    비교 연산자(>, <, >=, <=)
      - 피연산자끼리 값을 비교하여 true, false를 반환한다.
        => 조건식에 사용한다

    논리연산자(or(&&), and(||), not(!))
      - 여러개의 논리형 데이터를 통해 true, false를 반환한다.
      - or(&&) : 피연산자 중 하나라도 true이면 true, 모두 false이면 false이다.
      - and(||) : 피연산자 모두 true일 때는 true, 하나라도 false이면 false이다.
      - not(!) : 값을 부정한다. 값이 true이면 false, false이면 true이다. 
      
    부정연산자(!)
      - true를 false, false를 true로 판단한다.
      - 동등연산자의 부정(!=) => 사용안함
      - 일치연산자의 부정(!==) => 자주 사용
*/

// 할당 연산자(=)
//  - 우항의 값을 좌항에 할당한다
var age = 30;
age = 40;

console.log(age);

// 산술 연산자(+, -, *, /, %(나머지연산자))
//  피연산자에 산술된 값을 반환한다.

age = age + 20; //더하기
age = age - 20; //빼기
age = age * 2; //곲하기
age = age / 2; //나누기

age = age + 10 / 2; //사칙연산이 된다(*, /가 먼저 계산 +, -를 먼저 계산하고 싶으면 ()안에 넣어준다.)

age = 43;

var result = age % 5; //나머지 연산자

console.log("age =", age);
console.log("result =", result);

//  산술 할당 연산자( +=, -=, *=, /=, %= )
//   - 산술과 할당을 동시에 한다.

age += 10; // age = age + 10;
age -= 10; // age = age - 10;
age *= 2; // age = age * 2;
age /= 5; // age = age / 5;
age %= 5; // age = age % 5;
console.log("age =", age);

//  단항 연산자 (++, --)
//    - 피연산자가 하나인 연산자.

// 단항 산술 연산자
age = 20;
//후위 연산자 : 값을 먼저 사용하고 마지막에 자신을 증가시킨다. 우선순위가 마지막이다.
age++;
console.log(age);
age--;
console.log(age);

age = 30;
// 전위 연산자 : 값을 먼저 증가시키고 사용한다. 우선순위가 최우선이다.
++age;
console.log(age);
--age;
console.log(age);

age = 30;
var result02 = age++ - 20;
console.log(result02, age);

age = 30;
var result03 = ++age - 20;
console.log(result03, age);

var num = 10;
var result04 = 0;

result04 = num++ + 12 - --num;
console.log(result04, num);

// 연결 연산자(문자열) => 문자열을 연결한다.

var str = "안녕하세요 " + "저는 조민정 입니다";
console.log(str);

// 문자열과 숫자에 +를 사용하면 연결 연산자로 동작한다.
// parseInt(문자열) => 숫자로 변환 가능한 문자열을 숫자형으로 바꿔준다.

console.log(typeof (1 + "1")); //예상치 못한 오류가 발생할수도 있어 좋은점은 아니다.
console.log(typeof (1 + parseInt("1")));

// 동등 연산자(==)
//     - 우항과 좌항의 값이 동등한지 비교한다.
//     - JS가 자동으로 형변환을 하기 때문에, 다른 자료형의 값을 비교할 때 주의해야된다.

console.log(1 == 1); //t
console.log(1 == "1"); //t
console.log(1 == true); //t
console.log(0 == false); //t

// 일치 연산자(===)
//     - 우항과 좌하으이 값이 완전히 일치하는지 비교한다.
//     - 형변환을 거치지 않고 비교한다.

console.log(1 === 1); //t
console.log(1 === "1"); //f
console.log(1 === true); //f
console.log(0 === false); //f

// 부정연산자(!)
//   - true를 false, false를 true로 판단한다.

// 동등연산자의 부정(!=)
console.log(1 != 1); //f
console.log(1 != "1"); //f
console.log(1 != true); //f
console.log(0 != false); //f

// 일치연산자의 부정(!==)
console.log(1 !== 1); //f
console.log(1 !== "1"); //t
console.log(1 !== true); //t
console.log(0 !== false); //t

// 대소관계 비교 연산자(>, <, >=, <=)
//     - 피연산자끼리 값을 비교하여 true, false를 반환한다.
//       => 조건식에 사용한다
console.log(10 <= 10); //t
console.log(10 < 10); //f
console.log(!(10 <= 10)); //f

// 논리연산자(or(&&), and(||), not(!))
//   - 여러개의 논리형 데이터를 통해 true, false를 반환한다.
//   - or(&&) : 피연산자 중 하나라도 true이면 true, 모두 false이면 false이다.
//   - and(||) : 피연산자 모두 true일 때는 true, 하나라도 false이면 false이다.
//   - not(!) : 값을 부정한다. 값이 true이면 false, false이면 true이다.
var user02 = {
  gender: "female",
  age: 26,
  name: "minjeong",
};

console.log(user02.name === "minjeong" && user02.age >= 26); //t
console.log(user02.name === "minjeong" || user02.age > 26); //t
console.log(!(user02.age >= 26)); //f
