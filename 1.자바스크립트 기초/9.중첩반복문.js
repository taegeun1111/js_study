var line = 1;
var level = 2;

while (line <= 9) {
  console.log(`3x${line}=${3 * line}`);
  line++;
}

for (var level = 2; level <= 9; level++) {
  for (var line = 1; line <= 9; line++) {
    console.log(`${level}x${line}=${level * line}`);
  }
}

//
