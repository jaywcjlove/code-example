const code = `/* Stylus mode */

#id,
.class,
article
  font-family Arial, sans-serif

#id,
.class,
article {
  font-family: Arial, sans-serif;
}

// Variables
font-size-base = 16px
line-height-base = 1.5
font-family-base = "Helvetica Neue", Helvetica, Arial, sans-serif
text-color = lighten(#000, 20%)

body
  font font-size-base/line-height-base font-family-base
  color text-color

body {
  font: 400 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}

// Variables
link-color = darken(#428bca, 6.5%)
link-hover-color = darken(link-color, 15%)
link-decoration = none
link-hover-decoration = false

// Mixin
tab-focus()
  outline thin dotted
  outline 5px auto -webkit-focus-ring-color
  outline-offset -2px

a
  color link-color
  if link-decoration
    text-decoration link-decoration
  &:hover
  &:focus
    color link-hover-color
    if link-hover-decoration
      text-decoration link-hover-decoration
  &:focus
    tab-focus()

a {
  color: #3782c4;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #2f6ea7;
}
a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
`;

 export default code;