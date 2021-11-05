<template>
  <div class="body">

    <SectionScrollable>
        <HeaderInfo temp="24" snow="3" open="34" announcement="This is an announcement." />

        <div class="m-3">
            <b-card title="Route to Wildcat" img-src="https://hailey-erickson.com/images/skier.png" img-alt="Image" img-top tag="article">
                <b-card-text>From the frontside, head up the Deer Point Express quad chairlift and exit to the left..</b-card-text>
                <b-button to="/explore" variant="dark" block>View Route</b-button>
            </b-card>
        </div>

        <div class="m-3">
            <b-card title="Route to Pioneer Lodge" img-src="https://hailey-erickson.com/images/skier-two.png" img-alt="Image" img-top tag="article">
                <b-card-text>From the backside, take the Superior quad chairlift to the top and exit to the right..</b-card-text>
                <b-button to="/explore" variant="dark" block>View Route</b-button>
            </b-card>
        </div>

    </SectionScrollable>

    <Footer/>
  </div>
</template>

<script>
    import SectionScrollable from '@/components/SectionScrollable.vue'
    import HeaderInfo from '@/components/HeaderInfo.vue'
    import Footer from '@/components/Footer.vue'

    export default {
      name: 'Home',
      components: {
          SectionScrollable,
          HeaderInfo,
          Footer
      }
    }
</script>

<style>
    html, body {height: 100%; margin: 0; padding: 0}

    .body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

</style>
