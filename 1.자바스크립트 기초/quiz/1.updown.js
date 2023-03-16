alert("1~50 사이의 무작위 숫자를 맞춰보세요!!!");
var rn = Math.floor(Math.random() * 50) + 1;
// console.log(rn);

while (true) {
  var inputNum = +prompt("숫자를 입력");
  if (inputNum === rn) {
    break;
  } else if (inputNum >= rn) {
    alert("Down");
  } else if (inputNum <= rn) {
    alert("Up");
  }
}
alert("딩동댕");
