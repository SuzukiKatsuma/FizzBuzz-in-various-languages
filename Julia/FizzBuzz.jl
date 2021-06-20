x = parse.(Int, readline())

if x % 15 == 0
    println("FizzBuzz")
elseif x % 5 == 0
    println("Buzz")
elseif x % 3 == 0
    println("Fizz")
else
    println(x)
end