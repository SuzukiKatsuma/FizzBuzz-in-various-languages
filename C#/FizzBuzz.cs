using System;

class FizzBuzz
{
  static void Main()
  {
    var input = System.Console.ReadLine();
    int x = System.Int32.Parse(input);

    if (x % 15 == 0)
      Console.WriteLine("FizzBuzz");
    else if (x % 5 == 0)
      Console.WriteLine("Buzz");
    else if (x % 3 == 0)
      Console.WriteLine("Fizz");
    else
      Console.WriteLine(x);
  }
}