<template>
  <div class="body">
    <SectionScrollable>
        <HeaderLogo/>

        <b-list-group flush>
            <ListItem item="Name"/>
            <ListItem item="Email"/>
            <ListItem item="Address"/>
            <ListItem item="Phone Number"/>
            <ListItem item="Season Pass Number"/>
            <ListItem item="Run's I've gone on"/>

        </b-list-group>
    </SectionScrollable>

    <Footer/>
  </div>
</template>

<script>
    import SectionScrollable from '@/components/SectionScrollable.vue'
    import HeaderLogo from '@/components/HeaderLogo.vue'
    import ListItem from '@/components/ListItem.vue'
    import Footer from '@/components/Footer.vue'

    export default {
      name: 'Account',
      components: {
          SectionScrollable,
          HeaderLogo,
          ListItem,
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
