makeLine = () => {
  console.log("===============================");
};

//함수 정의 - 만든다.
function happyGreeting(yourName) {
  console.log(`${yourName}님 안녕하세요! 방가방가!`);
  console.log(`오늘도 즐거운 하루되세요~`);
}
//함수 호출 - 사용한다.
happyGreeting("뽀로로");

//원의 넓이 ((원주율*반지름) ^2)

// function calcAreaCircle(r) {
//   var PI = 3.1459265;
//   var area = PI * r ** 2;
//   return area;
// }
calcAreaCircle = (r) => {
  var PI = 3.1459265;
  var area = PI * r ** 2;
  return area;
};

var r1 = calcAreaCircle(5);
var r2 = calcAreaCircle(15);
var r3 = calcAreaCircle(20);

console.log(`${r1},${r2},${r3}`);
