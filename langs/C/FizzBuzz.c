#include <stdio.h>

int main()
{
  int x;
  scanf_s("%d", &x);

  for (int i = 1; i <= x; i++)
  {
    if (i % 15 == 0)
      printf("FizzBuzz");
    else if (i % 3 == 0)
      printf("Fizz");
    else if (i % 5 == 0)
      printf("Buzz");
    else
      printf("%d", i);

    printf("\t");
  }

  return 0;
}