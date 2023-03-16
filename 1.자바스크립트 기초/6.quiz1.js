var x = +prompt("첫번째 숫자를 입력!");
var y = +prompt("두번째 숫자를 입력!");

if (x > y) {
  var t;
  t = x;
  y = x;
  x = t;
}
var total = 0;
while (x <= y) {
  total += x;
  x++;
}
alert("4 ~ 7까지의 누적합 : " + total);
