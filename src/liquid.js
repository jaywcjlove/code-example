const code = `class Random < Liquid::Block
  def initialize(tag_name, markup, tokens)
     super
     @rand = markup.to_i
  end

  def render(context)
    value = rand(@rand)
    super.sub('^^^', value.to_s)  # calling \`super\` returns the content of the block
  end
end

Liquid::Template.register_tag('random', Random)
text = " {% random 5 %} you have drawn number ^^^, lucky you! {% endrandom %} "
@template = Liquid::Template.parse(text)
@template.render  # will return "you have drawn number 1, lucky you!" in 20% of cases
`;

 export default code;