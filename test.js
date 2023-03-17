var arr1 = [1,2,3,4];
var arr2 = arr1;

arr1[1] = 999;

arr2[0] = 77;

console.log(`arr1:[${arr1}]`);
console.log(`arr2:[${arr2}]`);