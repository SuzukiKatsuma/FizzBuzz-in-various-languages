using System;

class FizzBuzz
{
  static void Main()
  {
    var input = System.Console.ReadLine();
    int x = System.Int32.Parse(input);

    for (int i = 1; i <= x; i++)
    {
      if (i % 15 == 0)
        Console.Write("FizzBuzz");
      else if (i % 3 == 0)
        Console.Write("Fizz");
      else if (i % 5 == 0)
        Console.Write("Buzz");
      else
        Console.Write(i);

      Console.Write("\t");
    }
  }
}