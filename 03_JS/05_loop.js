/*
반복문 
  - 코드를 반복해서 실행한다.
   
  for(초기값; 조건문; 증감식){}문
    - 조건이 true라면 실행.
    - 초기값은 조건식에 사용할 값을 초기화 한다.
    - 조건식은 실행하고자는 횟수와 값을 비교한다.
    - 증감식은 매 반복이 끝날 때 마다 값을 증가시켜 언젠가 반복문이 종료될 수 있게 한다.
      => 증감식을 제대로 작성하지 않으면 무한반복이 일어난다.(ctrl + c 를 누르면 빠져나올수 있다.)
    - 중첩되어 사용할수 있다
      => for(){
          외부 for문
          for(){
            내부 for문
          }
        }

  while(조건식){}문
    - 조건식이 false가 될 때 까지 반복한다.
      => 외부 변수를 병경하는 식으로 종료 조건을 만족한다.
      => break문을 통해서 종료할수 있다.
      => continue는 해당 회차만 건너뛴다.
    - do-while문
        => do{
          실행문
        } while(조건);
        차이점은 조건문을 실행하기 전에 한번 이상은 꼭 실행해야된다.
              
*/

let num = 0;

// for문
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//구구단 2단 출력하기
console.log("-----------------구구단 2단 출력하기------------");
for (let i = 1; i < 10; i++) {
  console.log(`2 * ${i} = ${2 * i}`);
}

// for문 중첩 가능

for (let i = 2; i <= 9; i++) {
  console.log(`----------------------구구단 출력 ${i}단-------------------`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// while문

let age = 30;

// while (age < 100) {
//   console.log(age++ + "세가 되었습니다.");
//   break;
// }

// while (true) {
//   if (age <= 100) {
//     console.log(age++ + "세가 되었습니다.");
//     break;
//   }
// }
while (true) {
  if (age === 50) {
    age++;
    continue;
  }
  console.log(age++ + "세가 되었습니다.");
  if (age >= 100) {
    console.log("죽엇습니다.");
    break;
  }
}

// while문으로 0~100까지 짝수 출력하기
let i = 0;
while (i <= 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

let j = 0;

while (j <= 100) {
  j++;
  if (j % 2 !== 0) continue;
  console.log(j);
}
// 시작부터 a가 0보다 작아서 실행이 안됨
// let a = 0;
// while (a > 0) {
//   console.log(a);
//   a++;
//   if (a > 100) break;
// }

// var a = 1;

// do {
//   console.log(a);
//   i++;
// } while (a <= 10);
// {
//   console.log(a);
// }
