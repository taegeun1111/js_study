// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

alert("1~50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!!");
var rn = Math.floor(Math.random() * 50) + 1;
// console.log(rn);
//  사용자의 초기 입력 기회
var INIT_COUNT = 5;
//  사용자의 남은 입력 기회
var cntDown = INIT_COUNT;
while (true) {
  var inputNum = +prompt("숫자를 입력");
  INIT_COUNT--;
  if (inputNum === rn) {
    alert(`정답입니다! ${INIT_COUNT - cntDown}번만에 맞췄습니다.`);
    break;
  } else if (inputNum >= rn) {
    alert("Down");
  } else if (inputNum <= rn) {
    alert("Up");
  }

  //추가 게임 종료 조건
  if (cntDown <= 0) {
    alert(`기회를 모두 소진했습니다. GAME OVER`);
    break;
  } else {
    alert(`기회가 ${INIT_COUNT}번 남았습니다.`);
  }
}
