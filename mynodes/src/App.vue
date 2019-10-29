<template>
  <div id="app">
      <tool></tool>
      <list></list>
      <edit></edit>
  </div>
</template>

<script>
import  tool form './components/tool'
import  list form './components/list'
import  edit form './components/edit'

export default {
  name: 'App',
  components:{
    tool,
    list,
    edit
  },
}
</script>

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
