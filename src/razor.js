const code = `@{
    var total = 0;
    var totalMessage = "";
    @* a multiline
      razor comment embedded in csharp *@
    if (IsPost) {

        // Retrieve the numbers that the user entered.
        var num1 = Request["text1"];
        var num2 = Request["text2"];

        // Convert the entered strings into integers numbers and add.
        total = num1.AsInt() + num2.AsInt();
    <italic><bold>totalMessage = "Total = " + total;</bold></italic>
    }
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Add Numbers</title>
    <meta charset="utf-8" />
  </head>
<body>
  <p>Enter two whole numbers and then click <strong>Add</strong>.</p>
  <form action="" method="post">
    <p><label for="text1">First Number:</label>
      <input type="text" name="text1" />
    </p>
    <p><label for="text2">Second Number:</label>
      <input type="text" name="text2" />
    </p>
    <p><input type="submit" value="Add" /></p>
  </form>

  @* now we call the totalMessage method 
     (a multi line razor comment outside code) *@

  <p>@totalMessage</p>
  
  <p>@(totalMessage+"!")</p>
  
  An email address (with escaped at character): name@@domain.com
 
</body>
</html>
`;

 export default code;