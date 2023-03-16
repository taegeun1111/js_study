alert("재미있는 사칙연산 게임");
alert("[즐겁게 문젤르 푸시다가 지겨우면 0을 누르세요]");

while (true) {
  var rnX = Math.floor(Math.random() * 19) + 1;
  var rnY = Math.floor(Math.random() * 19) + 1;
  var result = +prompt(`${rnX}+${rnY}=??`);
  if (result === 0) {
    alert("게임을 종료합니다.");
    break;
  } else if (result !== rnX + rnY) {
    alert("틀렸어요.");
  } else if (result === rnX + rnY) {
    alert("정답입니다.");
  }
}
