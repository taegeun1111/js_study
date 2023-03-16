alert("재미있는 사칙연산 게임");
alert("[즐겁게 문젤르 푸시다가 지겨우면 0을 누르세요]");
var trueCnt = 0;
var falseCnt = 0;
var answer = 0;
while (true) {
  var rnX = Math.floor(Math.random() * 20) + 1;
  var rnY = Math.floor(Math.random() * 20) + 1;
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
    alert(`정답횟수 : ${trueCnt}회, 틀린횟수 : ${falseCnt}`);
    break;
  } else if (result !== answer) {
    alert("틀렸어요.");
    falseCnt++;
  } else if (result === answer) {
    alert("정답입니다.");
    trueCnt++;
  }
}
