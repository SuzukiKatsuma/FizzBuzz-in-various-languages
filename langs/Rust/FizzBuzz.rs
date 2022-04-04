use std::io;

fn main() {
  let mut input = String::new();
  io::stdin().read_line(&mut input).ok();
  let num: usize = input.trim().parse().ok().unwrap();

  for n in 1..(num + 1) {
    if n % 15 == 0 {
      print!("FizzBuzz");
    } else if n % 3 == 0 {
      print!("Fizz");
    } else if n % 5 == 0 {
      print!("Buzz");
    } else {
      print!("{}", n);
    }
    
    print!("\t");
  }
}
