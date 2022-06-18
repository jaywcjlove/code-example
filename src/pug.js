const code = `doctype 5
html(lang="en")
    head
        title= pageTitle
        script(type='text/javascript')
            if (foo) {
                bar()
            }
    body
        // Disclaimer: You will need to turn insertSpaces to true in order for the
            syntax highlighting to kick in properly (especially for comments)
            Enjoy :)
        h1 Pug - node template engine
        #container
            if youAreUsingPug
                p You are amazing
            else
                p Get on it!`;

 export default code;