process.stdin.resume();
process.stdin.setEncoding('utf8');

import * as fs from 'fs';

const x: number = parseInt(fs.readFileSync("/dev/stdin", "utf8"), 10);

for (let i = 1; i <= x; i++) {
  if (i % 15 === 0)
    console.log("FizzBuzz");
  else if (i % 3 === 0)
    console.log("Fizz");
  else if (i % 5 === 0)
    console.log("Buzz");
  else
    console.log(i);

  console.log("\t");
}
