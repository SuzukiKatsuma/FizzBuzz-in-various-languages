#include <stdio.h>

int main(){
  int x;
  scanf("%d", &x);

  if (x%15 == 0)
    printf("FizzBuzz");
  else if (x%5 == 0)
    printf("Buzz");
  else if (x%3 == 0)
    printf("Fizz");
  else
    printf("%d", x);

  return 0;
}