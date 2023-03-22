/*
 question : 질문
 yes : 'yes'라고 대답한 경우 실행되는 함수
 no : 'no'라고 대답한 경우 실행되는 함수
*/

ask = (qustion, yes, no) =>{
    if(confirm(qustion)) {
        yes();
    }else {
        no();
    }
}

showOk =() => {
    alert("동의하셨습니다.");
}
showCancel = () =>{
    alert('취소하셨습니다.');
}
ask('동의하시나요?',showOk,showCancel);
