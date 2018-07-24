
const code = `{# this is a comment #}
{%- for item in li -%}
  <li>{{ item.label }}</li>
{% endfor -%}
{{ item.sand == true and item.keyword == false ? 1 : 0 }}
{{ app.get(55, 1.2, true) }}
{% if app.get('_route') == ('_home') %}home{% endif %}
{% if app.session.flashbag.has('message') %}
  {% for message in app.session.flashbag.get('message') %}
    {{ message.content }}
  {% endfor %}
{% endif %}
{{ path('_home', {'section': app.request.get('section')}) }}
{{ path('_home', {
    'section': app.request.get('section'),
    'boolean': true,
    'number': 55.33
  })
}}
{% include ('test.incl.html.twig') %}

`;

export default code;
