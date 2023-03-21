//정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

function showOddOrEvenNumber(n, delim) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === delim) console.log(i);
  }
}

// showEvenNumber(10);
// showOddNumber(10);
showOddOrEvenNumber(10, 0);

function showNumber(n, code) {
  for (let i = 1; i <= n; i++) {
    if (code(i)) {
      console.log(i);
    }
  }
}
console.log("-------------------------");

function test(n) {
  return n % 3 === 0;
}
showNumber(30, test);
//code = n%3===0이 전달되는 것이 아니라 논리값을 전달해준다. 또한 n의 값이 없어 값이 나오지 않는다.
// showNumber(50, n%3===0);
showNumber(10, function (n) {
  return n % 3 === 0 && n % 6 !== 0;
});
console.log("-------------------------");
showNumber(20, (n) => n % 3 === 0);
//코드를 함수에 감싸서 전달한다.
//이름이 없는 함수를 전달
//함수의 이름이 code를 전달한다. n에는 50;

/*
const n = 50;
const code = function(n){
    return n%3 ===0;
}
*/

function showMessage(message, howTo) {
  //경우의 수가 너무 많음으로 공통 기능만 추가 후 개별 기능은 사용자에게
  document.body.style.background = "gray";

  //0.5초 늦춤
  setTimeout(() => {
    //개별기능
    howTo(message);

    //공통기능
    alert("하하호호");
  }, 500);
}

showMessage("메롱메롱", function (m) {
  alert(m);
});
//빨리 실행되는 것은 먼저 실행된다. 그래서 background컬러가 alert보다 늦게 바뀜
//background를 더 빨리 실행하기 위해서는 setTimeout사용
