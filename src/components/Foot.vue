<template>
  <div id="footer">
      <p>{{text}}</p>
  </div>
</template>

<script>
    export default {
      name: 'FullScreenSection',
      props: {
          text: String,
      }
    }
</script>

<style>
    #footer {
        flex-shrink: 0;
        background: deepskyblue
    }
</style>
