const code = `<#ftl stripText=false>

<#-- Free marker demo -->

<#comment>
This demonstrates the FreeMarker language. The default theme is not very
colorful and displays many different token types in the same color, but keep in
mind that you can define your own theme (or extend an existing one).

Note that free marker actually defines 6 similar but different syntax modes:

- 3 tag syntax modes: Angle (<#if>), Bracket ([#if]), and Auto.
- 2 interpolation modes: Dollar (\${...}) and Bracket ([=...])

In auto mode, the first tag determines the tag syntax. You can use the language
IDs "freemarker.tag-bracket.interpolation-dollar" etc. to force a specific mode.

The default FreeMarker mode is Angle/Dollar.
</#comment>

<#macro greet name>
  <font size="+2">Hello \${name}!</font>
</#macro>

<#macro border>
  <table border=4 cellspacing=0 cellpadding=4><tr><td>
    <#nested>
  </tr></td></table>
</#macro>

<#function avg x y>
  <#return (x + y) / 2>
</#function>

<#assign user = "Juila Smith">
<#assign animals = [{"name": "Tanuki", "price": 200}, {"name": "Phoenix", "price": 1111}]>

<html>
<head>
  <title>Welcome!</title>
</head>
<body>
  <#-- Greet the user with his/her name -->
  <h1>
    <@greet user />
  </h1>

  <p>We have these animals:

  <ul>
  <#list animals as animal>
    <li>\${animal.name} for \${animal.price} Euros
  </#list>
  </ul>

  <@border>The bordered text</@border>

  The average of 35 and 49 is \${avg(35, 49)}.

</body>
</html>
`;

 export default code;