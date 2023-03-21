// 객체 리터럴(값)
makeLine = () => {
  console.log("-------------here-------------");
};
var dog = {
  //프로퍼티 작성
  name: "뽀삐",
  kind: "진돗개",
  age: 3,
  injection: true,
  favorite: ["산책", "간식"],
  hate: null,
  playWithChild: () => {},
};

// 데이터 하나로 설명할 수없기 때문에 객체를 사용
//변수, 문자열 사용 가능

var cat = {
  name: "콩순이",
  age: 2,
  injection: true,
  favorite: ["낮잠자기", "방어지럽히기"],
  kind: "블랙러시안",
};
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);

console.log(cat.favorite[0]);
// (.)점 : ~의

dog.favorite.push("꼬리 흔들기");
cat.favorite.pop();
console.log(cat);
console.log(dog);

//프로퍼티 참조 2
console.log("---------------------------");
console.log(dog.injection);
console.log(dog['injection']);

// key를 변수에 저장해놓고 사용할 때
var fv = "favorite";
console.log(cat.fv); //undefined
console.log(cat[fv]); //["낮잠자기", "방어지럽히기"]

//프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = "실뭉치";
// dog[injection] = false;
dog.injection = false;

//프로퍼티 동적 추가
cat.owner = "김철수"; //추가
cat.owner = "박영희"; //수정

//프로퍼티 삭제
delete cat.owner;

//프로퍼티 존재 유무 확인
//key를 반드시 문자열로 표기해야함.

"age" in cat;
if (!("master" in cat)) {
  cat["master"] = "김또또";
}

console.log(cat);
var m = "master";
if (!("m" in cat)) {
  cat["m"] = "김또또";
}

console.log("---------------------------");

// 객체를 순회하는 반복문
// of면 배열 in면 객체
for (var k in dog) {
  //   console.log(k);
  console.log(dog[k]);
}
