x = int(input())

i = 1
while i <= x:
  if i % 15 == 0:
    print('FizzBuzz', end='\t')
  elif i % 5 == 0:
    print('Buzz', end='\t')
  elif i % 3 == 0:
    print('Fizz', end='\t')
  else:
    print(i, end='\t')
  
  i += 1