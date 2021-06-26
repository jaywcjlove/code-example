code-example
---

Language code example & sample.

## Installation

```bash
npm install code-example --save
```

## Using

```js
import('code-example/lib/php.js').then((data) => {
  console.log('Language PHP Code Example:', data.default);
});
// load txt file
// https://github.com/microsoft/monaco-editor/tree/gh-pages/index/samples
import('code-example/txt/sample.php.txt').then((data) => {
  console.log('Language PHP Code Example:', data.default);
});
```

## Language

```bash
apl              eiffel           javascript       oz               scheme           troff
brainfuck        elm              jinja2           pascal           shell            ttcn-cfg
clike            erlang           json             pegjs            sieve            ttcn
clojure          factor           jsx              perl             slim             turtle
cmake            fcl              julia            php              smalltalk        twig
cobol            forth            less             pig              smarty           vb
coffeescript     fortran          livescript       powershell       solr             vbscript
commonlisp       gas              lua              properties/ini   soy              velocity
crystal          gherkin          markdown         protobuf         sparql           verilog
css              go               mathematica      pug              spreadsheet      vhdl
cypher           groovy           mbox             puppet           sql              vue
cython           haml             md               python           stex             webidl
d                handlebars       mirc             q                stylus           xml
dart             haskell-literate modelica         r                swift            xquery
diff             haskell          mscgen           rpm              tcl              yacas
django           haxe             mumps            rst              textile          yaml-frontmatter
dockerfile       htmlembedded     nginx            ruby             tiddlywiki       yaml
dtd              htmlmixed        nsis             rust             tiki             z80
dylan            http             ntriples         sas              toml
ecl              idl              octave           sass             tornado
```