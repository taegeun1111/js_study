var d = "X";

function outer() {
  var a = 1;
  var b = "B";
  function inner() {
    var a = 2;
    console.log(b);
  }
  return inner;
}
var someFun = outer();
someFun();

// sum = (a) => {
//   (b) => a + b;
// };

// console.log(sum(1)(2));

sum = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(sum(1)(2));
console.log(sum(1)(-4));

let x = 1;

function func() {
  let x = 2;
  console.log(x);
}

func();
