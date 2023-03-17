var foodList = ["닭꼬치", "볶음밥", "짜장면", "족발"];

var count = 0;
var target = "짜장면";

// indexOF : 배열의 특정 데이터가 몇 번 인덱스에 있는지
var index = foodList.indexOf(target);

// for (var food of foodList) {
//   if (food === target) {
//     break;
//   }
//   count++;
// }
// console.log(`찾은 인덱스:${count}`);

//slice
foodList.push("오뎅", "순대국밥");
console.log(foodList); //[ '닭꼬치', '볶음밥', '짜장면', '족발', '오뎅', '순대국밥' ]
var scliceFoods = foodList.slice(1, 4); //foodList[] 1번부터 4번 미만까지 추출
console.log(scliceFoods); //[ '볶음밥', '짜장면', '족발' ] => 복사해서 반환

var sliceFood2 = foodList.slice(2); // foodListp[] 2번부터 끝까지 추출
console.log(sliceFood2); //[ '볶음밥', '짜장면', '족발' ] => 복사해서 반환

var sliceFood3 = foodList.slice(); // 원본 배열 그대로 복사
console.log(sliceFood3); //[ '닭꼬치', '볶음밥', '짜장면', '족발', '오뎅', '순대국밥' ]

//reverse() : 배열 역순으로 배치, 원본 변경
console.log("------------------------------");
var nums = [10, 20, 30, 40, 50];
nums.reverse(); //반복의 횟수는 (length/2)
console.log(nums);

var copyNums = nums.slice();
copyNums.reverse(); //원본이 변경되기 때문에 copy본을 만들어 reverse를 시켜야 한다.

//concat() : 배열 2개를 연결
console.log("-----------------------------0");
var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);
console.log(concatedArr);

//includes() : 배열의 특정 데이터가 존재하는지 확인
var resultFlag = foodList.includes("닭꼬치");
console.log(resultFlag);

//splice() : 배열의 특정요소 제거, 삽입 => 원본 반영
foodList.splice(3, 1);
console.log(foodList); //[ '닭꼬치', '볶음밥', '짜장면', '오뎅', '순대국밥' ]

foodList.splice(0, 1, "보쌈");
console.log(foodList); //[ '보쌈', '볶음밥', '짜장면', '오뎅', '순대국밥' ]

//1번에 마라탕 삽입
foodList.splice(1, 0, "마라탕");
console.log(foodList); //[ '보쌈', '마라탕', '볶음밥', '짜장면', '오뎅', '순대국밥' ]

foodList.splice(2, 0, "아이스크림", "떡볶이");
console.log(foodList); ///[ '보쌈', '마라탕', '아이스크림', '떡볶이', '볶음밥', '짜장면', '오뎅', '순대국밥' ]

//2번부터 끝까지 삭제
foodList.splice(2);
console.log(foodList);
