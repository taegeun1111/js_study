// 자바스크립트의 함수는 함수를 리턴할 수 있음
// function calculator(n1, n2) {
//   function add() {
//     return n1 + n2;
//   }

//   return add;
// }

// const calculator = (n1, n2) => () => n1 + n2;
// console.log(calculator(1, 2));
/*
function calculator(n1, n2) {
    return () => n1 + n2;
}



const zzz = calculator(5, 7);
console.log(typeof zzz);

const n = zzz();
console.log(`n : ${n}`);
*/

/*
let count = 0; // 카운팅 변수 (전역 변수)

// 카운트를 올리는 함수
const increase = () => ++count;

console.log(increase());
console.log(increase());

count = 999;

console.log(increase()); // 3??
*/

/*
const increase = () => {
    let count = 0; // 지역 변수
    return ++count;
};

console.log(increase());
console.log(increase());
console.log(increase()); // 3??
*/

/*
const increaseClosure = () => {

    let count = 0; // 지역 변수 

    return () => ++count;
};


const increase = increaseClosure();

console.log(increase());
console.log(increase());

// count += 30;

console.log(increase()); // 3??
*/

/*
// 즉시 실행 함수 : 정의와 동시에 호출
const result = (function (n1, n2) {
    return n1 + n2;
  })(5, 8);
  
  console.log(result);
  
  
  
  const increase = (function () {
  
    let count = 0; // 지역 변수
    return () => ++count;
  
  })();
  
  console.log(increase());
  console.log(increase());
  console.log(increase());
*/

// const increase = () => {
//     let num = 0;
//     return ++num;
// }

/*
const increaseClosure = () => {
  let num = 0;
  function increase() {
    return ++num;
  }
  return increase;
};
const increase = increaseClosure();
console.log(increase());
console.log(increase());
console.log(increase());
*/
// const increase = (() => {
//   let num = 0;
//   return () => ++num;
// })();
// console.log(increase());
// console.log(increase());
// console.log(increase());
/*
let count = 0; // counting 전역변수

// 카운트를 올리는 함수
// const increase = () => ++count;

console.log(increase());
console.log(increase());

count = 999;
console.log(increase());
*/

// const increase = () => {
//   let count = 0;
//   return ++count;
// };

// console.log(increase());
// console.log(increase());
// console.log(increase());

/*
const increaseClosure = () => {
  let count = 0;
  //헬퍼함수
  return () => ++count;
};

//count를 증가시키는 보조함수를 호출한다.

const increase = increaseClosure();
console.log(increase()); //1
console.log(increase()); //2 
count =999; //불가
console.log(increase()); //3
*/

//즉시실행함수 : 함수를 만들자마자 호출. 이름이 없다. 1회성 함수(재활용 불가)
// const result = (function (n1, n2) {
//   return n1 + n2;
// })(5, 8);
// console.log(result);
const increase = (() => {
  let count = 0;
  return () => ++count;
})();
console.log(increase());
