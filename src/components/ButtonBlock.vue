<template>
    <div class="container mt-3">
        <b-button block class="bold-text">{{buttonText}}</b-button>
    </div>
</template>

<script>
    export default {
      name: 'ButtonBlock',
      props: {
          buttonText: String,
      },
    }
</script>

<style>
    .bold-text {
        font-weight: bold !important;
        text-transform: uppercase;
        letter-spacing: 3px;
        background: green;
    }
</style>
