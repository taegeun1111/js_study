// 1. 변수의 중복선언을 허용
var x = 10; //사라져버림
var x = "김철수";

console.log(`x:${x}`); //김철수

// let x = 10;
// let x = "김철수";
//Identifier 'x' has already been declared at internalCompileFunction

// 2.블록레벨 스코프 지원x
let i = "안녕";

for (let i = 0; i < 3; i++) {
  console.log(`for문 내부 i : ${i}`);
} //i가 끝나면 메모리가 사라짐(지역변수화가 된다.)
console.log(`for문 바깥쪽 i : ${i}`);

// 3.변수 호이스팅 : 변수선언문을 자동으로 맨 위로 올림
z = 100;
console.log(z);

let z;
