x = parse.(Int, readline())
  
for i in 1:x
  if i % 15 == 0
    print("FizzBuzz")
  elseif i % 3 == 0
    print("Fizz")
  elseif i % 5 == 0
    print("Buzz")
  else
    print(i)
  end
  print("\t")
end