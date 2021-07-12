<?php
  declare(strict_types=1);

  $x = trim(fgets(STDIN));
  if($x % 15 === 0)
    echo "FizzBuzz";
  else if($x % 5 === 0)
    echo "Buzz";
  else if($x % 3 === 0)
    echo "Fizz";
  else
    echo $x;
?>