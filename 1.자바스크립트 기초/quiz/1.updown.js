// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.  -> Math.random()
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.      -> prompt()
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

alert("1~50 사이의 무작위 숫자를 맞춰보세요!!!");

//실제 정답
var rn = Math.floor(Math.random() * 50) + 1;
// console.log(rn);

while (true) {
  //사용자 입력 답
  var inputNum = +prompt("숫자를 입력 [1~50]");
  if (inputNum === rn) {
    alert("딩동댕");
    break;
  } else if (inputNum >= rn) {
    alert("Down");
  } else if (inputNum <= rn) {
    alert("Up");
  }
}
