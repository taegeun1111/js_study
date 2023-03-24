// import { gameData } from "./gameData.js";
import { caseUp,caseDown,correctAnswer } from "./checkAnswer.js";
import gameStart from "./start.js";



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