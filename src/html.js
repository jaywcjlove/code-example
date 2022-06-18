const code = `<!DOCTYPE HTML>
<!--Example of comments in HTML-->
<html>
<head>
  <!--This is the head section-->
  <title>HTML Sample</title>
  <meta charset="utf-8">

  <!--This is the style tag to set style on elements-->
  <style type="text/css">
    h1
    {
      font-family: Tahoma;
      font-size: 40px;
      font-weight: normal;
      margin: 50px;
      color: #a0a0a0;
    }

    h2
    {
      font-family: Tahoma;
      font-size: 30px;
      font-weight: normal;
      margin: 50px;
      color: #fff;
    }

    p
    {
      font-family: Tahoma;
      font-size: 17px;
      font-weight: normal;
      margin: 0px 200px;
      color: #fff;
    }

    div.Center
    {
      text-align: center;
    }

    div.Blue
    {
      padding: 50px;
      background-color: #7bd2ff;
    }

    button.Gray
    {
      font-family: Tahoma;
      font-size: 17px;
      font-weight: normal;
      margin-top: 100px;
      padding: 10px 50px;
      background-color: #727272;
      color: #fff;
      outline: 0;
          border: none;
          cursor: pointer;
    }

    button.Gray:hover
    {
      background-color: #898888;
    }

    button.Gray:active
    {
      background-color: #636161;
    }

  </style>

  <!--This is the script tag-->
  <script type="text/javascript">
    function ButtonClick(){
      // Example of comments in JavaScript
      window.alert("I'm an alert sample!");
    }
  </script>
</head>
<body>
  <!--This is the body section-->
  <div class="Center">
    <h1>NAME OF SITE</h1>
  </div>
  <div class="Center Blue">
      <h2>I'm h2 Header! Edit me in &lt;h2&gt;</h2>
      <p>
        I'm a paragraph! Edit me in &lt;p&gt;
        to add your own content and make changes to the style and font.
        It's easy! Just change the text between &lt;p&gt; ... &lt;/p&gt; and change the style in &lt;style&gt;.
        You can make it as long as you wish. The browser will automatically wrap the lines to accommodate the
        size of the browser window.
      </p>
      <button class="Gray" onclick="ButtonClick()">Click Me!</button>
  </div>
</body>
</html>
`;

export default code;