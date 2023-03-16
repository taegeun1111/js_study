alert("재미있는 UP&DOWN 게임");
alert("난이도를 설정하세요");
var difficult = +prompt("1.상(기회 3번) | 2.중(기회 6번) | 3.하(기회 10번)");
var rn = Math.floor(Math.random() * 50) + 1;
// console.log(rn);
var cnt = 0;
while (true) {
  if (difficult === 1) {
    cnt = 3;
    alert("1~50 사이의 무작위 숫자를 3번 안에 맞춰보세요");
  } else if (difficult === 2) {
    cnt = 6;
    alert("1~50 사이의 무작위 숫자를 6번 안에 맞춰보세요");
  } else {
    cnt = 10;
    alert("1~50 사이의 무작위 숫자를 10번 안에 맞춰보세요");
  }
  while (true) {
    var inputNum = +prompt("숫자를 입력");
    if (inputNum === rn) {
      alert("딩동댕");
      break;
    } else if (inputNum >= rn) {
      alert("Down");
    } else if (inputNum <= rn) {
      alert("Up");
    }
    alert(`기회가 ${--cnt}번 남았습니다.`);
    if (cnt === 0) {
      alert(`기회를 모두 소진했습니다. GAME OVER`);
      break;
    }
  }
  break;
}
