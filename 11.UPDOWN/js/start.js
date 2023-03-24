import gameData from "./gameData.js";
import {caseUp,caseDown,correctAnswer} from "./checkAnswer.js";

//정의부(function .....)
//export default function gameStart(iconcount){} 가능
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

export default gameStart;