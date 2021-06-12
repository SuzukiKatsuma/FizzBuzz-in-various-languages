import java.util.Scanner;

class FizzBuzz {
  public FizzBuzz() {
    Scanner scn = new Scanner(System.in);
    int x = scn.nextInt();

    if (x % 15 == 0) {
      System.out.println("FizzBuzz");
    } else if (x % 5 == 0) {
      System.out.println("Buzz");
    } else if (x % 3 == 0) {
      System.out.println("Fizz");
    } else
      System.out.println(x);
  }

  public static void main(String[] args) {
    new FizzBuzz();
  }
}