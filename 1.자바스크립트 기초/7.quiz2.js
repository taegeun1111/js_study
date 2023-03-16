var num = +prompt("양의 정수를 입력");
var input = "";
while (num >= 0) {
  if (num % 2 === 1) {
    input += "+";
  } else {
    input += "-";
  }
  num--;
}
alert(input);
