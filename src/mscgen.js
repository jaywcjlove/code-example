
const code = `# Sample mscgen program
# See http://www.mcternan.me.uk/mscgen or
# https://sverweij.github.io/mscgen_js for more samples
msc {
  # options
  hscale="1.2";

  # entities/ lifelines
  a [label="Entity A"],
  b [label="Entity B", linecolor="red", arclinecolor="red", textbgcolor="pink"],
  c [label="Entity C"];

  # arcs/ messages
  a => c [label="doSomething(args)"];
  b => c [label="doSomething(args)"];
  c >> * [label="everyone asked me", arcskip="1"];
  c =>> c [label="doing something"];
  c -x * [label="report back", arcskip="1"];
  |||;
  --- [label="shows's over, however ..."];
  b => a [label="did you see c doing something?"];
  a -> b [label="nope"];
  b :> a [label="shall we ask again?"];
  a => b [label="naah"];
  ...;
}

`;

export default code;
