add = (n1, n2) => {
  var result = n1 + n2;
  return result; // 탈출문

  console.log(`메롱`); //return 하단 코드는 작동하지 않음
};
//반환값 : 함수 호출 이후에 함수 밖으로 전달되는 값
var r1 = add(5, 7);

add(r1, r1 * 2);

//안쪽으로 쭉가서 실행 같은 레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3, 4), add(6, 2)));
console.log(r2);

//리턴이 없는 함수 (void함수)
multi = (n1, n2) => {
  var result = n1 * n2;
  console.log(`${n1}x${n2}=${result}`);
};
var r3 = multi(10, 3);
add(r3, 10); //return값이 없어 나오지 r3값이 undefined가 나와서 값이 출력되지 않는다.

var r4 = add(multi(3, 2), 40);
console.log(`r4: ${r4}`);

// return 탈출문
callName = (nickName) => {
  var prohibits = ["멍청이", "돌아이", "홍길동"];
  if (prohibits.includes(nickName)) {
    console.log(`잘못된 닉네임은 인사를 못해줘 이놈아`);
    return;
  }
  console.log(`${nickName}님 안녕하세요!`);
};
callName("멍청이");

stopLoop = () => {
  while (true) {
    var flag = prompt("명령어를 입력하세요!");
    if (flag === "멈춰") {
      return;
    }
    alert(flag);
  }
  alert("수고하셨습니다.");
};
//return은 반복문만 끝내는게 아니라 함수 자체를 끝내기 때문에 break와 다르다
stopLoop();
