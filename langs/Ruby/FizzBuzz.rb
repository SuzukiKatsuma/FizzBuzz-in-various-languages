x = gets.to_i

for i in 1..x do
  if i % 15 == 0
    print "FizzBuzz"
  elsif i % 5 == 0
    print "Buzz"
  elsif i % 3 == 0
    print "Fizz"
  else
    print i
  end
  print "/t"
end