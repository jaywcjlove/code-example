
const code = `body
  table
    - for user in users
      td id="user_#{user.id}" class=user.role
        a href=user_action(user, :edit) Edit #{user.name}
        a href=(path_to_user user) = user.name
body
  h1(id="logo") = page_logo
  h2[id="tagline" class="small tagline"] = page_tagline

h2[id="tagline"
   class="small tagline"] = page_tagline

h1 id = "logo" = page_logo
h2 [ id = "tagline" ] = page_tagline

/ comment
  second line
/! html comment
   second line
<!-- html comment -->
<a href="#{'hello' if set}">link</a>
a.slim href="work" disabled=false running==:atom Text <b>bold</b>
.clazz data-id="test" == 'hello' unless quark
 | Text mode #{12}
   Second line
= x ||= :ruby_atom
#menu.left
  - @env.each do |x|
    li: a = x
*@dyntag attr="val"
.first *{:class => [:second, :third]} Text
.second class=["text","more"]
.third class=:text,:symbol
`;

export default code;
