const multi = (n1, n2) => n1 * n2;

function sayHello() {
  console.log("안녕하세요");
}
sayHello = () => console.log("안녕하세요");

sayHello();

const kim = {
  name: "김철수",
  age: 30,
  greeting: sayHello,
  dance: () => {
    console.log("춤을 신나게 춥니다.");
  },
};
kim.dance();
kim.greeting();

pow = (n) => console.log(n ** 2);
pow(5);

//함수 선언문과 함수 표현식(화살표함수)의 차이
console.log("==============================");
const r2 = sub(20, 10);

function sub(n1, n2) {
  return n1 - n2;
}

console.log(`r2 : ${r2}`);

const divide = (n1, n2) => n1 / n2;
const r3 = divide(30,6);

console.log(`r3:${r3}`);
//호이스팅이 일어나지 않는다.
