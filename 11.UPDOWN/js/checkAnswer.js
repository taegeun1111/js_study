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

export {caseUp,caseDown,correctAnswer};