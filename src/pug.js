
const code = `doctype html
  html
    head
      title= "Pug Templating CodeMirror Mode Example"
      link(rel='stylesheet', href='/css/bootstrap.min.css')
      link(rel='stylesheet', href='/css/index.css')
      script(type='text/javascript', src='/js/jquery-1.9.1.min.js')
      script(type='text/javascript', src='/js/bootstrap.min.js')
    body
      div.header
        h1 Welcome to this Example
      div.spots
        if locals.spots
          each spot in spots
            div.spot.well
         div
           if spot.logo
             img.img-rounded.logo(src=spot.logo)
           else
             img.img-rounded.logo(src="img/placeholder.png")
         h3
           a(href=spot.hash) ##{spot.hash}
           if spot.title
             span.title #{spot.title}
           if spot.desc
             div #{spot.desc}
        else
          h3 There are no spots currently available.

`;

export default code;
