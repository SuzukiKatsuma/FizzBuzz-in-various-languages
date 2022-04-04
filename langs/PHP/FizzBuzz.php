<?php
  declare(strict_types=1);

  $x = trim(fgets(STDIN));

  for ($i = 1; $i <= $x; $i++) {
    if($i % 15 === 0)
      echo "FizzBuzz";
    else if($i % 5 === 0)
      echo "Buzz";
    else if($i % 3 === 0)
      echo "Fizz";
    else
      echo $i;
    echo "\t";
  }
?>