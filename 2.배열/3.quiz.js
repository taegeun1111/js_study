/*
var NumberArr = [];

while (true) {
  let enterNumber = prompt(
    "숫자를 입력하세요 \n 그만두려면 '그만'이라고 입력하세요!"
  );
  if (enterNumber === "그만") {
    break;
  } else {
    NumberArr.push(+enterNumber);
  }
}
var total = 0;

for (var n of NumberArr) {
  total += n;
}
alert(`입력한 숫자 목록 [${NumberArr}]`);
alert(`입력한 숫자 총합 : ${total}`);
*/

/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 복습
let numArr = [];
let sumNumbers = 0;
while (true) {
  //숫자 입력
  let inputNum = prompt(
    `숫자를 입력하세요\n그만두려면 \'그만\'이라고 입력하세요!`
  );

  if (inputNum === "그만") {
    break;
  } else {
    //배열 저장
    numArr.push(+inputNum);
  }
  // sumNumbers += +inputNum;
}
for (var n of numArr) {
  sumNumbers += n;
}
alert(`입력한 숫자 목록 [${numArr}]\n입력한 숫자 총합:${sumNumbers}`);
