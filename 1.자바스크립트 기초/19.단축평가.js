// OR 연산 : 첫번째 truthy를 반환
console.log("hello" || "world"); //hello
console.log(0 || "안녕"); //안녕

//AND 연산 : 첫번째 falsy를 반환
console.log("==============================");

console.log("HELLO" && "WORLD"); //WORLD 둘다 true면 마지막 true를 반환
console.log(null && "메롱"); //null

/*
    <h1>안녕하세요. 우리 홈페이지에 오신걸 환영합니다.</h1>
    isLogin() && <h2>xxx님 안녕하세요!<h2>

    로그인을 안하면 <h1>까지만 나오고, 로그인을 하면 <h2>까지 나온다.

    게시물 수정 버튼
    isMineArticle() && <button>수정</button>
*/
