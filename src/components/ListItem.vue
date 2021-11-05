<template>
    <div>
        <b-list-group-item href="#" class="d-flex justify-content-between">
            <div>
                {{ item }}
            </div>

            <div>
                <b-badge v-if="badge" variant="light">{{badge}}</b-badge>
            </div>
        </b-list-group-item>
    </div>
</template>

<script>
    export default {
      name: 'ListItem',
      props: {
          item: String,
          badge: String,
      },
    }
</script>

<style scoped>

</style>
