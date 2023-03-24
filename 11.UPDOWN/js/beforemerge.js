//3.게임 데이터
const gameData = {
    secret : makeRandomNumber(100), //실제 정답
    answer : null,  //사용자의 선택값
    min : 1,    //최소범위
    max : 100,  //최대범위  

}
//3-1.랜덤정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range){
    return Math.floor(Math.random()*range)+1;
}


//정의부(function .....)
function gameStart(iconcount) {
    //1.구슬을 n개 만들어야 함.(헬퍼함수 생성)
    const $numbers = document.getElementById('numbers');
    const makeIcon = () => {
        for (let n = 1; n <= iconcount; n++) {
            //<div class = 'icon'>1</div>...
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n;
            $icon.dataset.iconNumber=n;
            $numbers.appendChild($icon);
        }
    };
    makeIcon();

    //2.아이콘에 클릭 이벤트 부여하기
    $numbers.onclick =e =>{
        if(!e.target.matches('#numbers .icon')) return; //바탕 부분 클릭 시 실행 x
        // console.log(`${e.target.dataset.iconNumber}:번 구슬 클릭함!`);

        //사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.answer);

        //정답 검증 함수
        checkNumber(e.target);
    }; 
}
//정답 검증 함수
function checkNumber($target) {
    //실제 정답이랑 선택값을 비교
    //디스트럭팅
    const {secret,answer} =gameData;
    if(secret === answer){ //정답인 경우
        correctAnswer($target);
    }else if(secret > answer) { //up인 경우
        caseUp($target);
    }else{ //down인 경우
        caseDown($target);
    }
};

function caseUp($icon){
    const $numbers = document.getElementById('numbers');
    //1. #begin 숫자값이 클릭값 +1로 변경
    document.getElementById('begin').textContent =+$icon.dataset.iconNumber+1;
    //2. #down .selected 제거, 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');
    //3. 자기 자신 아이콘 포함 이전 형제들 모두 삭제
    //iterator 디자인 패턴 : null이 나올때까지 반복
    //연계삭제
    let $delTarget=$icon;
    while($delTarget){
        let $nextTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    } 
    //$numbers.foreach(removeChild($icon.previousElementSibling));
     
}
function caseDown($icon){
    const $numbers = document.getElementById('numbers');
    //1. #end 숫자값이 클릭값 -1로 변경
    document.getElementById('end').textContent =+$icon.dataset.iconNumber-1;
    //2. #up .selected 제거, 추가
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');
    //3. 자기 자신 아이콘 포함 다음 형제들 모두 삭제
    let $delTarget=$icon;
    while($delTarget){
        let $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    } 

}


function correctAnswer($correctIcon){
    //1.fininsh 아이디 박스에 class 'show'부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');
    //2. #numbers 클릭 이벤트 해제
    document.getElementById('numbers').onclick ='null';
    //3. 클릭한 아이콘에 id 'move' 부여
    $correctIcon.setAttribute('id','move');
}

//-------------------------------------------//
//실행부(xxx() ......)
/*
(function(){    //전역변수를 자제하기 위해 즉시실행함수를 사용을 권장한다.
//xxx()....
})();
*/
(function () {
    gameStart(100);
})();