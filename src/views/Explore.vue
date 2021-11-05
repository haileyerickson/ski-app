<template>
  <div class="body">

    <SectionScrollable>
        <HeaderLogo/>

        <ButtonBlock buttonText="Plan A Route"/>

        <div class="m-3">
            <b-card title="Snowville Parking Lot to Happy Basin">
                <b-card-text>This route will take you straight from your car up to the top of Happy Basin.</b-card-text>
                <b-icon icon="circle-fill" variant="success" class="pr-3"></b-icon>
                <b-icon icon="square-fill" variant="primary" class="pr-3"></b-icon>
                <b-icon icon="diamond-fill" variant="dark"></b-icon>
            </b-card>
        </div>

        <div class="m-3">
            <b-card title="Snowville Parking Lot to Happy Basin">
                <b-card-text>This route will take you straight from your car up to the top of Happy Basin.</b-card-text>
                <b-icon icon="circle-fill" variant="success" class="pr-3"></b-icon>
                <b-icon icon="square-fill" variant="primary" class="pr-3"></b-icon>
                <b-icon icon="diamond-fill" variant="dark"></b-icon>
            </b-card>
        </div>

        <div class="m-3">
            <b-card title="Snowville Parking Lot to Happy Basin">
                <b-card-text>This route will take you straight from your car up to the top of Happy Basin.</b-card-text>
                <b-icon icon="circle-fill" variant="success" class="pr-3"></b-icon>
                <b-icon icon="square-fill" variant="primary" class="pr-3"></b-icon>
                <b-icon icon="diamond-fill" variant="dark"></b-icon>
            </b-card>
        </div>

        <div class="m-3">
            <b-card title="Snowville Parking Lot to Happy Basin">
                <b-card-text>This route will take you straight from your car up to the top of Happy Basin.</b-card-text>
                <b-icon icon="circle-fill" variant="success" class="pr-3"></b-icon>
                <b-icon icon="square-fill" variant="primary" class="pr-3"></b-icon>
                <b-icon icon="diamond-fill" variant="dark"></b-icon>
            </b-card>
        </div>

    </SectionScrollable>

    <Footer/>
  </div>
</template>

<script>
    import SectionScrollable from '@/components/SectionScrollable.vue'
    import HeaderLogo from '@/components/HeaderLogo.vue'
    import ButtonBlock from '@/components/ButtonBlock.vue'
    import Footer from '@/components/Footer.vue'

    export default {
      name: 'Explore',
      components: {
          SectionScrollable,
          HeaderLogo,
          ButtonBlock,
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
