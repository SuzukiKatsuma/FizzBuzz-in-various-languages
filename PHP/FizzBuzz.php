<html>

<head>
  <title>FizzBuzz</title>
</head>

<body>
  <form method="post" align="center">
    <input type="number" name="number">
    <input type="submit">
  </form>

  <p align="center">
    <?php
      if($_SERVER['REQUEST_METHOD']=="POST") {
        $x = $_POST['number'];
        print $x." ";

        if($x % 15 == 0)
          echo "FizzBuzz";
        else if($x % 5 == 0)
          echo "Buzz";
        else if($x % 3 == 0)
          echo "Fizz";
        else
          echo $x;
      }
    ?>
  </p>
</body>

</html>