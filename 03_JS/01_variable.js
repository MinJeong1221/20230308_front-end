// 01_variable.js 파일 생성
/*
  변수(variable)
    - 메모리에 데이터를 저장할 공간을 확보하고, 변수 이름을 통해서 접근할 수 있다.
      => 쉽게 표현하면 값에 이름을 붙인다.

  변수 선언(Declaration)
    - 메모리 변수 공간을 사용하겠다고 선언한다.
      => 변수, 함수 등의 이름을 식별자(Identifier)라고 한다.
    - var, let, const(상수 => 변하지 않는다) 키워드와 함께 변수 이름을 작성한다.    
    - 변수를 선언만 하면 undefined라는 값이 초기화 된다.
  
  변수 값 할당(Assignment)
    - 만들어진 변수에 값을 저장한다.
    - "="이라는 대입연산자를 사용한다.
      => "="을 기준으로 우항의 값이 좌항에 할당된다.
    - 이미 값이 지정된 변수에 다른 값을 다시 지정하는 것을 재할당이라고 한다.

  변수 참조(Reference)
    - 변수 이름을 통해서 저정된 값을 조회한다.
  
  변수 초기화
    - 변수 선언과 동시에 할당을 진행한다.
      => 할당을 생략하면 undefined(정의되지 않은)가 초기화 된다.

  변수명 짓는 규칙
    - JS에서 사용되는 키워드는 사용할 수 없다.
    - 문자, $, _, 숫자만 사용할 수 있다.(다른 특수기호는 사용 안됨)
    - 변수명은 숫자로 시작할 수 없다.
    - 변수명은 대소문자 구분을 한다.
    - 카멜 케이스, 스네이크 케이스, 파스칼 케이스기법을 사용한다.
      
*/
// 변수 선언과 동시에 값을 할당
var price = 1000;

// 변수를 식에도 사용가능 하다.
price = price - 100;

console.log(price);

// userName이라는 변수 선언
var userName;

// userName변수에 값을 할당
userName = "minjeong";

// userName변수에 값을 재할당
userName = "Cho minjeong";

// userName변수를 참조
console.log("userName =", userName);

// var는  키워드이기 때문에 변수 이름으로 사용할 수 없다.
// var var

// -는 빼기 기호이기 때문에 사용 불가능
// var user-Name

var user_Name;

// 변수 명을 숫자로 시작할수 없다.
// var 123name;

// 첫번째 단어 빼고 단어의 시작부분을 대문자로 작성한다. 카멜 케이스(camel case)
var userAge;

// 각 단어 사이의 _를 기입한다. 스네이크 케이스(snake case)
var user_age;

// 모든 단어의 시작부분이 대문자로 작성이 된다. 파스칼 케이스(pascal case)
// 파스칼 케이스는 생성자의 식별자로 사용하고, 리엑트에서 밥 먹듯이 사용한다.
var UserAge;

// 변수를 이용하여 서로 값을 바꾸자

var num01 = 10;
var num02 = 20;

num01 = num02;
console.log(num01);

num02 = num02 - 10;
console.log(num02);
