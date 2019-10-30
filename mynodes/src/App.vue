<template>
  <div id="app" class="app">
    <tool></tool>
    <list></list>
    <edit></edit>
  </div>
</template>

<style>
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
  .app {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
</style>

<script>

import edit from './components/edit';
import list from './components/list';
import tool from './components/tool';

export default {
  name: 'app',
  components: {
      edit,
      list,
      tool
    }
}
</script>
