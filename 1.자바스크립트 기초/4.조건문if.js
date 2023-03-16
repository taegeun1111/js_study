// var age = prompt("당신의 나이는?");
// alert(`내 나이 : ${age + 1}살`);
// 301

var age = Math.floor(Math.random() * 100)+1;

// math.random() - 0.0 <= ~ <1.0
// math.random()*100 - 0.0 <= ~ <100.0
// math.


// var age = +prompt("당신의 나이는?");
alert(`내 나이 : ${age + 1}살`);
// 31 (형변환)

if (age > 19) {
    alert("성인입니다.");
} else {
    alert("주류를 구매할 수 없습니다.");
}