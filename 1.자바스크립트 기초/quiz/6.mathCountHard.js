alert("재미있는 사칙연산 게임");
alert("[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요]");
var difficult = +prompt("1.상(1~100) | 2.중(1~50) | 3.하(1~20)");
var rndifficult = 0;
var answer = 0;
while (true) {
  if (difficult === 1) {
    rndifficult = 100;
  } else if (difficult === 2) {
    rndifficult = 50;
  } else if (difficult === 3) {
    rndifficult = 20;
  }
  while (true) {
    var rnX = Math.floor(Math.random() * rndifficult) + 1;
    var rnY = Math.floor(Math.random() * rndifficult) + 1;
    var rnZ = Math.floor(Math.random() * 3) + 1;
    if (rnZ === 1) {
      rnZ = "+";
      answer = rnX + rnY;
    } else if (rnZ === 2) {
      rnZ = "-";
      answer = rnX - rnY;
    } else if (rnZ === 3) {
      rnZ = "*";
      answer = rnX * rnY;
    }

    var result = +prompt(`${rnX}${rnZ}${rnY}=??`);
    if (result === 0) {
      alert("게임을 종료합니다.");
      break;
    } else if (result !== answer) {
      alert("틀렸어요.");
    } else if (result === answer) {
      alert("정답입니다.");
    }
  }
  break;
}
