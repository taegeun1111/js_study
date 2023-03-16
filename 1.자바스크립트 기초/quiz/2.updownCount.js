alert("1~50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!!");
var rn = Math.floor(Math.random() * 50) + 1;
// console.log(rn);
var cnt = 5;
while (true) {
  var inputNum = +prompt("숫자를 입력");
  if (inputNum === rn) {
    alert("딩동댕");
    break;
  } else if (inputNum >= rn) {
    alert("Down");
  } else if (inputNum <= rn) {
    alert("Up");
  }
  alert(`기회가 ${--cnt}번 남았습니다.`);
  if (cnt === 0) {
    alert(`기회를 모두 소진했습니다. GAME OVER`);
    break;
  }
}
