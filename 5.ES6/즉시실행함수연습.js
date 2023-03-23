/*
var mySquare = ((x) => x ** x)(3);
console.log(mySquare);
*/

var initText;
((number) => {
    var textList = ["is Odd Text", "is Even Text"];
    if (number % 2 === 0) {
        initText = textList[1];
        return console.log(initText);
    } else {
        initText = textList[0];
    }
    return console.log(initText);
})(6);