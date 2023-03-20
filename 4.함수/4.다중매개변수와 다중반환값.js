//multi parameter : 매개변수가 n개인 경우

//집합 자료구조를 매개변수로 사용
//[배열, 객체]

//n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

//스프레드 : (...numbers)대괄호 생략 가능, 파라미터에서 내부적으로 배열로 처리.
addAll = (...numbers) => {
  var total = 0;

  for (var n of numbers) {
    total += n;
  }
  return total;
};
var r1 = addAll(1, 3, 5, 10, 20);
console.log(`r1 : ${r1}`);

//배열 두개를 전달해야할 때는 사용 불가 ...은 하나만 사용 가능
foo = (arr1, arr2) => {
  foo();
};

//함수의 리턴은 언제나 하나.
// 2개의 정수를 전달하면 덧셈,뺄셈,곱셈,나누셈의 결과를 리턴받고자 한다.

operateAll = (n1, n2) => {
  //   return [addAll(n1, n2), n1 - n2, n1 * n2, n1 / n2];
  return {
    plus: addAll(n1, n2),
    minus: n1 - n2,
    multiply: n1 * n2,
    divide: n1 / n2,
  };
};

var result = operateAll(10, 5);
console.log(`덧셈결과 : ${result.plus}`);
console.log(`뺄셈결과 : ${result.minus}`);
console.log(`곱셈결과 : ${result.multiply}`);
console.log(`나눗셈결과 : ${result.divide}`);
