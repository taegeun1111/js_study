const emp = {
  empName: "빡빡이",
  age: 29,
  hireDate: "2014-01-01",
  birthDay: "1995-12-31",
};

/*
const empName = emp.empName;
const age = emp.age;
const birthDay = emp.birthDay;
*/

/*
const { empName, age, birthDay } = emp;
console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다.`);
*/

const { empName: en, age: a, birthDay: bd } = emp;
//키 이름 변경 가능
console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다.`);

//배열 다시 나누기 (birthDay,age는 따로 하고 나머지는 다시 배열로 적용)
const { birthDay, age, ...others } = emp;
console.log(birthDay);
console.log(age);
console.log(others);

//객체 안적 복사 후 추가 : 스프레드
const copyEmp = {
  ...emp,
  address: "서울시",
  hobbies: ["놀고먹기", "낮잠"],
  empName : '망둥어' //수정가능
};

console.log(copyEmp);


