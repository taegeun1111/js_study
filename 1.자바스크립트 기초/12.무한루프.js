// while (true) {}
var n = 1;
for (;;) {
  console.log(n++);
  if (n === 10) {
    break;
  }
}
while (true) {
  console.log(n++);
  if (n === 10) break;
}
console.log("안녕");
