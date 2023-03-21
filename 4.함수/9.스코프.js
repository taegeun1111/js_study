//전역 변수
var x = 10;

// 매개변수도 지역스코프를 가짐
foo = (z) => {
  console.log(`지역변수 x 선언 전 : ${x}`);
  var y = 20 + x; //지역변수
  console.log(y - z);

  var x = "홍길동";
  console.log(`지역변수 x 선언 후 : ${x}`);
};

foo(50);

//foo()를 호출하기 전에는 메모리에 없다가 실행하면 잠시 생긴다. 함수의 실행이 끝나면 메모리에서 자동적으로 제거
//지역변수는 함수가 호출되면 잠시 생겼다 함수 호출이 끝나면 사라짐.

// 중첩 함수 : 함수안에 함수를 정의
outer = (m) => {
  var n = "outer local n";
  var v = "outer local v";
  console.log(m);
  console.log(n);
  console.log(v);

  //헬퍼 함수 : 호출이 함수 내부로 제한됨
  inner = () => {
    console.log(`inner function : ${n}`);
    var m  = 'inner local m';
    var v  = 'inner local v';
    console.log(m);
    console.log(v);
  };
  inner();
};

var m = "global m";
outer("outer param m");
