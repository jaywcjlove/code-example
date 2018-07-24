
const code = `{% extends "layout.twig" %}
{% block title %}CodeMirror: Twig mode{% endblock %}
{# this is a comment #}
{% block content %}
  {% for foo in bar if foo.baz is divisible by(3) %}
    Hello {{ foo.world }}
  {% else %}
    {% set msg = "Result not found" %}
    {% include "empty.twig" with { message: msg } %}
  {% endfor %}
{% endblock %}

`;

export default code;
