const code = `<?php
// The next line contains a syntax error:
if () {
  return "The parser recovers from this type of syntax error";
}
?>
<html>
<head>
  <title>Example page</title>
</head>

<body>

<script type="text/javascript">
  // Some PHP embedded inside JS
  // Generated <?=date('l, F jS, Y')?>
  
  var server_token = <?=rand(5, 10000)?>
  if (typeof server_token === 'number') {
    alert('token: ' + server_token);
  }
</script>

<div>
Hello
<? if (isset($user)) { ?>
  <b><?=$user?></b>
<? } else { ?>
  <i>guest</i>
<? } ?>
!
</div>

<?php

  /* Example PHP file
  multiline comment
  */

  $cards = array("ah", "ac", "ad", "as",
    "2h", "2c", "2d", "2s",
    "3h", "3c", "3d", "3s",
    "4h", "4c", "4d", "4s",
    "5h", "5c", "5d", "5s",
    "6h", "6c", "6d", "6s",
    "7h", "7c", "7d", "7s",
    "8h", "8c", "8d", "8s",
    "9h", "9c", "9d", "9s",
    "th", "tc", "td", "ts",
    "jh", "jc", "jd", "js",
    "qh", "qc", "qd", "qs",
    "kh", "kc", "kd", "ks");

  srand(time());

  for($i = 0; $i < 52; $i++) {
    $count = count($cards);
    $random = (rand()%$count);

    if($cards[$random] == "") {
      $i--;
    } else {
      $deck[] = $cards[$random];
      $cards[$random] = "";
    }
  }

  srand(time());
  $starting_point = (rand()%51);
  print("Starting point for cut cards is: $starting_point<p>");

  // display shuffled cards (EXAMPLE ONLY)
  for ($index = 0; $index < 52; $index++) {
    if ($starting_point == 52) { $starting_point = 0; }
    print("Uncut Point: <strong>$deck[$index]</strong> ");
    print("Starting Point: <strong>$deck[$starting_point]</strong><br>");
    $starting_point++;
  }
?>

</body>
</html>`;

 export default code;