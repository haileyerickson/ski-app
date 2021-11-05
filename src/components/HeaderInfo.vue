<template>
    <div>
        <b-alert show dismissible variant="danger" class="text-center">{{ announcement }}</b-alert>

        <img src="../assets/bogus-logo.png" class="img-fluid mx-auto d-block pt-3" width="100px" />

        <div class="d-flex justify-content-between text-center mt-4 ml-5 mr-5 mb-0">
            <div>
                <h3 class="mb-0">{{ temp }}</h3>
                <p>degrees</p>
            </div>

            <div>
                <h3 class="mb-0">{{ snow }}</h3>
                <p>inches</p>
            </div>

            <div>
                <h3 class="mb-0">{{ open }}</h3>
                <p>open runs</p>
            </div>
        </div>

        <hr class="m-0">
  </div>
</template>

<script>
    export default {
      name: 'QuickInfoHeader',
      props: {
        temp: String,
        snow: String,
        open: String,
        announcement: String,
      }
    }
</script>

<style scoped>
    h3 {
        font-size: 18px;
    }

    p {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #0a3153;
    }

</style>
