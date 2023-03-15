
// 홑따옴표
// var sentence = '<ul>\n\t<li>\n\t\t<a>add</a>';
// 백틱
var sentence = `<ul>
                    <li>
                        <a>hhh</a>
                    </li>
                </ul>
                `;

console.log(sentence);

var month =4;
var day = 5;
var anniversary = '식목일';

// 홑따옴표
// var message = month + '월' + day + '일은' + anniversary + '입니다.';
// 백틱
var message = `${month}월 ${day}일은 ${anniversary}입니다. `
console.log(message); 

var flag = false;
console.log(typeof flag);