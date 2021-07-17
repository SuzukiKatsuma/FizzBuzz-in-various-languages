process.stdin.resume();
process.stdin.setEncoding('utf8');

const x = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  x.push(line);
});

reader.on('close', () => {
  for (let i = 1; i <= x[0]; i++) {
    if (i % 15 === 0)
      process.stdout.write("FizzBuzz\t");
    else if (i % 3 === 0)
      process.stdout.write("Fizz\t");
    else if (i % 5 === 0)
      process.stdout.write("Buzz\t");
    else
      process.stdout.write(i + `\t`);
  }
});