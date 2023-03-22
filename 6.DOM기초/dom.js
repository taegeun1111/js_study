// <div id='box'>
// <input id='abc' class='zzz xxx vvv' type='text'></input>
// </div>

let box, input;

box = {
  tagName: "div",
  attributes: {
    id: "box",
  },
  children: [input],
  //parentNode: document.body,
};

input = {
  tagName: "input",
  attributes: {
    id: "abc",
    classList: ["zzz", "xxx", "vvv"],
    type: "text",
  },
  parentNode: box,
};

console.log(input);
//html태그가 javascript로 프로그래밍 언어로 변환된다. => DOM