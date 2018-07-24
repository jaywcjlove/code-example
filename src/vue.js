
const code = `<template>
  <div class="sass">Im am a {{mustache-like}} template</div>
</template>

<script lang="coffee">
  module.exports =
    props: ['one', 'two', 'three']
</script>

<style lang="sass">
.sass
  font-size: 18px
</style>
`;

export default code;
