const userNames = ["김철수", "강감찬", "박영희"];
const [kim, kang, park] = userNames;

console.log(kim);
console.log(kang);
console.log(park);

const [firstObj, secondObj] = [{ id: 1 }, { id: 2 }, { id: 3 }].filter(
  (obj) => obj.id >= 2
);
console.log(firstObj);
console.log(secondObj);

//변수 교환하기
let first = 10,
  second = 20;
/* 
const temp =first;
first = second;
second = temp;
*/
[second, first] = [first, second];

console.log(first);
console.log(second);

//앞 2개는 변수에 각각 넣고 나머지는 다시 배열
const numbers = [1, 3, 5, 6, 7, 9, 11];
/*
const copyNumbers = numbers.slice();
const one = copyNumbers.shift(); //제거되면서 1이 들어옴
const three = copyNumbers.shift(); //제거되면서 3이 들어옴
const others = copyNumbers;

console.log("-----------------------");
console.log(one);
console.log(three);
console.log(others);
console.log(numbers);
*/ //원래라면 이렇게 진행 하지만 하단 구조분해를 통해 요약
const [one, three, ...others] = numbers;
console.log(one);
console.log(three);
console.log(others);
console.log(numbers);

//배열 복사하면서 요구사항 추가
//스프레드로 배열 간편복사
console.log("--------------------------");
const foods = ["감튀", "DQPC", "징거버거"];
//const copyFoods =foods; //주소복사
const copyFoods = [...foods, "사이다", "쥬스"]; //실제 데이터 배열 복사 (...) : spread

foods[0] = "콜라";

console.log(foods);
console.log(copyFoods);
