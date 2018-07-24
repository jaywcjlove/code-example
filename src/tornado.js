
const code = `<!doctype html>
<html>
  <head>
    <title>My Tornado web application</title>
  </head>
  <body>
    <h1>
      {{ title }}
    </h1>
    <ul class="my-list">
      {% for item in items %}
        <li>{% item.name %}</li>
      {% empty %}
        <li>You have no items in your list.</li>
      {% end %}
    </ul>
  </body>
</html>

`;

export default code;
