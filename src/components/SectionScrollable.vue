<template>
  <div id="scrollable-section">
      <slot></slot>
  </div>
</template>

<script>
    export default {
      name: 'SectionScrollable',
      props: {

      }
    }
</script>

<style>
    #scrollable-section {
        flex: 1 0 auto;
        height: 90vh;
        overflow-y: scroll;
    }
</style>
