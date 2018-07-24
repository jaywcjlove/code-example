
const code = `{namespace example}

/**
 * Says hello to the world.
 */
{template .helloWorld}
  {@param name: string}
  {@param? score: number}
  Hello <b>{$name}</b>!
  <div>
    {if $score}
      <em>{$score} points</em>
    {else}
      no score
    {/if}
  </div>
{/template}

{template .alertHelloWorld kind="js"}
  alert('Hello World');
{/template}

`;

export default code;
