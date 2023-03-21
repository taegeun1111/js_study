playerName = [];
rouletteCount = 0;

//게임 인원 설정 (n명)
while (true) {
  var gamePeople = +prompt("게임 인원 2 ~ 4명");
  //2~4명이 아닐 경우 다시 돌아가기
  if (gamePeople < 2 || gamePeople > 4 || gamePeople === NaN) {
    alert("2 ~ 4명 사이의 값을 입력해주세요!");
    continue;
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
  var roulette = [true, true, true, true, true, true];
  for (var j = 0; j < bulletNum; j++) {
    //실탄 채우기(배열 : rouletteDie로 6개 중 랜덤으로 총알 넣기)
    var rouletteRandom = Math.floor(Math.random() * 6); //3
    //random값이 겹칠 경우 j--후 다시 반복, 'kill'추가
    if (roulette[rouletteRandom] === true) {
      roulette.splice(rouletteRandom, 1, false);
    } else {
      j--;
    }
  }

  // 인원 정하기
  //                                                                                                                                                                                                        alert(`총을 받았습니다. ${playerName[playerRandom]}부터 시작합니다.`);

  // 게임 시작
  var playerRandom = Math.floor(Math.random() * gamePeople);
  var playArr1 = playerName.slice(playerRandom);
  var playArr2 = playerName.slice(0, playerRandom);
  var addArr = playArr1.concat(playArr2);
  var deathCount = 0;
  alert(`총을 받았습니다.${addArr[0]}부터 시작합니다.}`);
  //종료조건 : 사람이 1명 남았을때, 총알이 모두 소진되었을때
  while (true) {
    for (var i = 0; i < addArr.length; i++) {
      alert(
        `${addArr[i]}님의 턴!] 탄창을 회전합니다.\n엔터를 누르면 격발합니다.`
      );
      if (roulette[rouletteCount] === true) {
        alert(`...휴~살았습니다.`);
        rouletteCount++;
      } else if (roulette[rouletteCount] === false) {
        alert(`빵!! [${addArr[i]}]님 사망...`);
        addArr.splice(i, 1);
        rouletteCount++;
        deathCount++;
        i--;
      }
      if (bulletNum === deathCount) {
        break;
      }
    }
    break;
  }
  alert(
    `실탄이 모두 소진되었습니다. 게임을 종료합니다. \n생존한 인원 : ${addArr}`
  );
  break;
}

// if (playerName.length === 1 || roulette === 6) {
//   alert(`${playerName}님의 승리`);
//   break;
// } else {
//   alert(
//     `${playerName[playerRandom]}님의 턴!] 탄창을 회전합니다.\n엔터를 누르면 격발합니다.`
//   );
//   if (roulette[rouletteCount] === true) {
//     alert(`...휴~살았습니다.`);
//     rouletteCount++;
//   } else if (roulette[rouletteCount] === false) {
//     alert(`빵!! [${playerName[playerRandom]}]님 사망...`);
//     playerName.splice(playerRandom, 1);
//   }
// }
