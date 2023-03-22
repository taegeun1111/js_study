// 첫번째 () : 정의, 두번째 () : 호출
/* 
const incerese = (() => {
  let count = 0;
  return () => ++count;
})();

const decerese = (() => {
  let count = 0;
  return () => --count;
})();
*/

// console.log(incerese()); //1
// console.log(incerese()); //2
// console.log(decrease()); //1

// function counterClosuer() {
//   let count = 0;
//   function increase() {
//     return ++count;
//   }
//   function decrease() {
//     return --count;
//   }
//   return { increase, decrease };
// }

// const counter = counterClosuer(); //객체
// const increase = counter.increase;
// const decrease = counter.decrease;

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(decrease()); //1

/*
const counter = (() => {
  let count = 0;

  return {
    increase: () => ++count,
    decrease: () => --count,
  };
})();

const { increase, decrease } = counter;

console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1
*/

const counterWithCbClosure = () => {
  let count = 0;
  //callback
  const process = (callback) => {
    return (count = callback(count));
  };
  return process;
};
// counterWithCbClosure를 호출하면 process함수 덩어리 전체가 return된다.
// counter_ 는 process()

const counter_ = counterWithCbClosure();

// c는 count를 의미
console.log(counter_((c) => ++c)); //1
console.log(counter_((c) => (c += 3))); //4
console.log(counter_((c) => (c **= 2))); //16

// --------------------즉시실행함수로 변환-----------------------
const counter2 = (() => {
  let count = 0;
  return (callback) => (count = callback(count));
})();

console.log(counter2((c) => ++c)); // 1
console.log(counter2((c) => (c += 3))); // 4
console.log(counter2((c) => (c **= 2))); // 16
