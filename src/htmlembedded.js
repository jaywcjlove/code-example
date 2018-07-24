
const code = `<%
function hello(who) {
  return "Hello " + who;
}
%>
This is an example of EJS (embedded javascript)
<p>The program says <%= hello("world") %>.</p>
<script>
  alert("And here is some normal JS code"); // also colored
</script>

`;

export default code;
