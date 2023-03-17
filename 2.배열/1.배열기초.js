var a = 10;
var b = a;

a = 15;

console.log(a);
console.log(b);

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;

arr1[1] = 999;
arr2[0] = 77;

console.log(`arr1 : [${arr1}]`);
console.log(`arr1 : [${arr2}]`);
console.log("-------------------------------");
// 배열의 생성
// 배열 변수 이름 관례 : 복수형, list어미
var fruits = ["오렌지", "라임", "레몬"]; //배열 리터럴 내부 세로로 쓰는것을 추천(삭제 용이), 마지막 , 붙혀도 됨
console.log(fruits);
console.log(`배열의 데이터 수 : ${fruits.length}`);

console.log(`첫번째 데이터 : ${fruits[0]}`);
console.log(`배열 길이 : ${fruits.length - 1}`);

// 수정시 주의사항
// fruits[4] = "초콜릿";
// console.log(fruits);

// 배열 내부데이터 전체 참조 (순회)
// 선형 탐색 : 순차적으로 확인해보면서 찾기
var target = "오렌지";
// 찾았는지에 대한 여부
var fineFlag = false;
for (var i = 0; i < fruits.length; i++) {
  if (fruits[i] === target) {
    console.log(`${target} 과일은 존재함`);
    fineFlag = true;
    break;
  }
}
if (!fineFlag) console.log(`${target} 과일 없음`);

// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ["월", "화", "수", "목", "금", "토", "일"];

for (let i = 0; i < weekDays.length; i++) {
  console.log(`${weekDays[i]}요일`);
}

for (var day of weekDays) {
  console.log(`${day}요일!`);
}
