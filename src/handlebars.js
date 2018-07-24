
const code = `{{> breadcrumbs}}
{{!--
  You can use the t function to get
  content translated to the current locale, es:
  {{t 'article_list'}}
--}}

<h1>{{t 'article_list'}}</h1>

{{! one line comment }}

{{#each articles}}
  {{~title}}
  <p>{{excerpt body size=120 ellipsis=true}}</p>

  {{#with author}}
    written by {{first_name}} {{last_name}}
    from category: {{../category.title}}
    {{#if @../last}}foobar!{{/if}}
  {{/with~}}

  {{#if promoted.latest}}Read this one! {{else}} This is ok! {{/if}}

  {{#if @last}}<hr>{{/if}}
{{/each}}

{{#form new_comment}}
  <input type="text" name="body">
{{/form}}
`;

export default code;
