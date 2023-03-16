alert("재미있는 사칙연산 게임");
alert("[즐겁게 문젤르 푸시다가 지겨우면 0을 누르세요]");
var trueCnt = 0;
var falseCnt = 0;
while (true) {
  var rnX = Math.floor(Math.random() * 19) + 1;
  var rnY = Math.floor(Math.random() * 19) + 1;
  var result = +prompt(`${rnX}+${rnY}=??`);
  if (result === 0) {
    alert("게임을 종료합니다.");
    alert(`정답횟수 : ${trueCnt}회, 틀린횟수 : ${falseCnt}`);
    break;
  } else if (result !== rnX + rnY) {
    alert("틀렸어요.");
    falseCnt++;
  } else if (result === rnX + rnY) {
    alert("정답입니다.");
    trueCnt++;
  }
}
