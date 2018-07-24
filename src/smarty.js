
const code = `{extends file="parent.tpl"}
{include file="template.tpl"}

{* some example Smarty content *}
{if isset($name) && $name == 'Blog'}
  This is a {$var}.
  {$integer = 451}, {$array[] = "a"}, {$stringvar = "string"}
  {assign var='bob' value=$var.prop}
{elseif $name == $foo}
  {function name=menu level=0}
    {foreach $data as $entry}
      {if is_array($entry)}
        - {$entry@key}
        {menu data=$entry level=$level+1}
      {else}
        {$entry}
      {/if}
    {/foreach}
  {/function}
{/if}
`;

export default code;
