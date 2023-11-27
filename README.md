Code Sample
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![NPM Downloads](https://img.shields.io/npm/dm/code-example.svg?style=flat)](https://github.com/jaywcjlove/code-example)
[![NPM Version](https://img.shields.io/npm/v/code-example.svg)](https://www.npmjs.com/package/code-example)
[![CI](https://github.com/jaywcjlove/code-example/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/code-example/actions/workflows/ci.yml)

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
diff.lhs.txt                sample.freemarker2.txt      sample.mysql.txt            sample.sb.txt
diff.rhs.txt                sample.fsharp.txt           sample.nginx.txt            sample.scala.txt
sample.abap.txt             sample.go.txt               sample.objective-c.txt      sample.scheme.txt
sample.aes.txt              sample.graphql.txt          sample.pascal.txt           sample.scss.txt
sample.apex.txt             sample.handlebars.txt       sample.pascaligo.txt        sample.shell.txt
sample.azcli.txt            sample.hcl.txt              sample.perl.txt             sample.sol.txt
sample.bat.txt              sample.html.txt             sample.pgsql.txt            sample.sparql.txt
sample.bicep.txt            sample.ini.txt              sample.php.txt              sample.sql.txt
sample.brainfuck.txt        sample.java.txt             sample.pla.txt              sample.st.txt
sample.c.txt                sample.javascript.txt       sample.plaintext.txt        sample.stylus.txt
sample.cameligo.txt         sample.json.txt             sample.postiats.txt         sample.swift.txt
sample.clike.txt            sample.jsx.txt              sample.powerquery.txt       sample.systemverilog.txt
sample.clojure.txt          sample.julia.txt            sample.powershell.txt       sample.tcl.txt
sample.coffeescript.txt     sample.kotlin.txt           sample.proto.txt            sample.toml.txt
sample.cpp.txt              sample.less.txt             sample.pug.txt              sample.tsx.txt
sample.csharp.txt           sample.lex.txt              sample.python.txt           sample.twig.txt
sample.csp.txt              sample.lexon.txt            sample.qsharp.txt           sample.typescript.txt
sample.css.txt              sample.liquid.txt           sample.r.txt                sample.vb.txt
sample.dart.txt             sample.livescript.txt       sample.razor.txt            sample.vbscript.txt
sample.dockerfile.txt       sample.lua.txt              sample.redis.txt            sample.verilog.txt
sample.ecl.txt              sample.m3.txt               sample.redshift.txt         sample.vue.txt
sample.elixir.txt           sample.markdown.txt         sample.restructuredtext.txt sample.xml.txt
sample.erlang.txt           sample.mips.txt             sample.ruby.txt             sample.yaml.txt
sample.flow9.txt            sample.msdax.txt            sample.rust.txt
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/code-example/graphs/contributors">
  <img src="https://jaywcjlove.github.io/code-example/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
