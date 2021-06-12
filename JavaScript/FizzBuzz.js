function FizzBuzz(x) {
  if (x % 15 == 0) {
    document.write("FizzBuzz");
    console.log("FizzBuzz");
  }
  else if (x % 5 == 0) {
    document.write("Buzz");
    console.log("Buzz");
  }
  else if (x % 3 == 0) {
    document.write("Fizz");
    console.log("Fizz");
  }
  else {
    document.write(x);
    console.log(x);
  }
}

var x = prompt();
FizzBuzz(x);