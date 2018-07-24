
const code = `<!doctype html>
<html>
  <head>
    <title>My Django web application</title>
  </head>
  <body>
    <h1>
      {{ page.title|capfirst }}
    </h1>
    <ul class="my-list">
      {# traverse a list of items and produce links to their views. #}
      {% for item in items %}
      <li>
        <a href="{% url 'item_view' item.name|slugify %}">
          {{ item.name }}
        </a>
      </li>
      {% empty %}
      <li>You have no items in your list.</li>
      {% endfor %}
    </ul>
    {% comment "this is a forgotten footer" %}
    <footer></footer>
    {% endcomment %}
  </body>
</html>
`;

export default code;
