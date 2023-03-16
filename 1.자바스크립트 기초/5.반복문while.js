// 10~0 카운트 다운 출력
var count = 10;

while (count >= 0) {
    console.log(count);
    count--;
}

console.log('---------------------------------');

// 1~10까지 누적총합
var total = 0;
var n = 1; // 제어변수 (초기값 : begin)
while (n <= 10) { // 조건식 (끝값 : end)
    total += n;
    n++; //증감식 (step)
}

console.log(total);

console.log('---------------------------------');
// 1~100까지 홀수의 누적총합
var total = 0;
var n = 1; // 제어변수 (초기값 : begin)
while (n <= 100) { // 조건식 (끝값 : end)
    if (n % 2 === 1) {
        total += n;
    }
    n++; //증감식 (step)
}

console.log(total);