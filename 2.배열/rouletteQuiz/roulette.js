playerName = [];
rouletteCount = 0;

//게임 인원 설정 (n명)
while (true) {
  var gamePeople = +prompt("게임 인원 2 ~ 4명");
  //2~4명이 아닐 경우 다시 돌아가기
  if (gamePeople < 2 || gamePeople > 4 || gamePeople === NaN) {
    alert("2 ~ 4명 사이의 값을 입력해주세요!");
  } else {
    //플레이어 이름 등록
    for (var i = 0; i < gamePeople; i++) {
      playerName[i] = prompt(`${i + 1}번 플레이어 이름`);
    }
    alert(`[${playerName}]참가`);
    //실탄 개수
    var bulletNum = +prompt("실탄 개수 1 ~ 5개");
  }

  //게임 시작 (초기배열 6명 생존 -> Math.random으로 'kill' 배열에 넣고, 반복)
  var roulette = [ture, ture, ture, ture, ture, ture];
  for (var j = 0; j < bulletNum; j++) {
    //실탄 채우기(배열 : rouletteDie로 6개 중 랜덤으로 총알 넣기)
    var rouletteRandom = Math.floor(Math.random() * 6); //3
    //random값이 겹칠 경우 j--후 다시 반복, 'kill'추가
    if (roulette[rouletteRandom] === ture) {
      roulette.splice(rouletteRandom, 1, false);
    } else {
      j--;
    }
  }
  // while (true) {
  // 인원 정하기

  // alert(`총을 받았습니다. ${playerName[playerRandom]}부터 시작합니다.`);

  // 게임 시작
  while (true) {
    var playerRandom = Math.floor(Math.random() * gamePeople);
    alert(
      `${playerName[playerRandom]}님의 턴!] 탄창을 회전합니다.\n엔터를 누르면 격발합니다.`
    );
    if (playerName.length === 0 || roulette > 7) {
      break;
    } else if (roulette[rouletteCount] === ture) {
      alert(`...휴~살았습니다.`);
      rouletteCount++;
    } else if (roulette[i] === false) {
      alert(`빵!! [${playerName[playerRandom]}]님 사망...`);
      playerName.splice(playerName, 1);
    }
  }
  // }
  alert(roulette);
  break;
}

//종료조건 : 사람이 1명 남았을때, 총알이 모두 소진되었을때
