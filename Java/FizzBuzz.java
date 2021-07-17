import java.util.Scanner;

class FizzBuzz {
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int x = scn.nextInt();

    for (int i = 1; i <= x; i++) {
      if (i % 15 == 0) {
        System.out.print("FizzBuzz");
      } else if (i % 5 == 0) {
        System.out.print("Buzz");
      } else if (i % 3 == 0) {
        System.out.print("Fizz");
      } else
        System.out.print(i);

      System.out.print("\t");
    }
  }
}