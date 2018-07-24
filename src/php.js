
const code = `<?php
$a = array('a' => 1, 'b' => 2, 3 => 'c');

echo "$a[a] \${a[3] /* } comment */} {$a[b]} \\$a[a]";

function hello($who) {
  return "Hello $who!";
}
?>
<p>The program says <?= hello("World") ?>.</p>
<script>
  alert("And here is some JS code"); // also colored
</script>
`;

export default code;
