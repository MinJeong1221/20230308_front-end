/* 
  콜백 함수
    - 다른 함수의 인자로 전달되는 함수.
      => 함수의 연산 결과를 가지고 어떠한 동작을 할지 나중에 결정될 때 사용한다.
    - 콜백함수에 인자를 전달할 수 있다.
      => 연산결과를 전달하여 그 시점에서 원하는 동작을 함수형태로 작성한다.
      => 익명함수를 주로 사용한다.  
*/

// 같은 동작을 n번 실행하는 함수
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    // console.log(n + "n번째 실행...");
    callback(i);
  }
}

// 익명함수 전달
repeat(7, function (i) {
  console.log(`${i}번째 실행`);
  console.log("이러이러한 동작을 실행합니다.");
});

// 미리 작성된 함수 전달
repeat(7, print);

function print(i) {
  console.log(`${i}번째 실행`);
  console.log("이러이러한 동작을 실행합니다.");
}

// 숫자 2개를 전달받아 더하고 그 더한 결과를 콜백함수에 전달하는 함수 작성
function sumFunction(a, b, callback) {
  callback(a + b);
}

sumFunction(2, 5, function (data) {
  console.log(`서버 전송 데이터 : ${data}`);
});

sumFunction(7, 5, function (data) {
  console.log(`평균값 : ${data / 2}`);
});
