var pets = ["멍멍이", "야옹이", "쩝쩝이"];

// 사용 x
// pets[pets.length] = '징징이';
console.log(pets);

// 맨 끝 데이터 추가
pets.push("징징이");
pets.push("어흥이");
pets.push("거부기", "콩콩이");

console.log(pets);

// 맨 끝 데이터 삭제
let pops = pets.pop();
console.log(pets);
console.log(pops);

// 맨 첫번째 데이터 삭제
pets.shift();
console.log(pets);

// 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);
