/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체라 할 수 있다.
 */

// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
const sub = function (n1, n2) {
  return n1 - n2;
}; //값이기 때문에 ;을 붙혀야 한다.
const r2 = sub(20, 10);
console.log(r2);

//함수 선언문
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
add = (n1, n2) => {
  return n1 + n2;
};
const plusA = add; // add라는 함수 자체를 plus에 집어넣는다.
const plusB = add(5, 9); //14

const r1 = plusA(10, 20);
console.log(`r1:${r1}`);

const fArr = [
  10,
  "hello",
  true,
  {},
  [],
  add,
  function () {
    console.log("메롱");
  },
]; //add라는 함수를 넣을 수 있다.
fArr[6]();

const dog = {
  name: "초코",
  kind: "푸들",
  // 메서드
  bark: function () {
    console.log("왈왈!");
  },
};
const cat = {
  name: "야옹이",
  kind: "페르시안",
  // 메서드
  sleep: function () {
    console.log("쿨쿨");
  },
};

dog.bark();
cat.sleep();
