/*
    decription : x~y까지의 총합을 구하는 함수
    parameter:
        - begin : 누적총합의 시작값
        - end : 누적총합의 끝값
    return : 계산된 총합
*/

// 매개변수(parameter) : 함수를 정의할 때
// 외부에서 받아오는 값을 저장할 변수

function calcRangeTotal(begin, end) {
  var total = 0; //총합을 저장할 변수
  for (var i = begin; i <= end; i++) {
    total += i;
  }
  return total;
}

// 인수(argument) : 함수를 호출할 때 함수에게 전달하는 값이나 표현식
var result1 = calcRangeTotal(1, 10);
console.log(`result1 : ${result1}`);

//매개변수의 기본값
function sayHello(language = "한국어") {
  if (language === "한국어") {
    console.log("안녕하세요!");
  } else if (language === "영어") {
    console.log("hello");
  } else if (language === "중국어") {
    console.log("따자하오");
  } else {
    console.log("곤니찌와");
  }
}

sayHello("영어");

//ex : [10,20,30,40,50]
mySlice = (arr, start, end) => {
  var copyArr = [];
  for (var i = start; i < end; i++) {
    copyArr.push(arr[i]);
  }
  return copyArr;
};

var newArr = mySlice([10, 20, 30, 40, 50], 1, 3);
console.log(newArr);

//매개변수가 없는 함수
selectRandompet = () => {
  var pets = ["멍멍이", "짹짹이", "꽥꽥이", "어흥이"];
  return pets[Math.floor(Math.random() * pets.length)];
};
