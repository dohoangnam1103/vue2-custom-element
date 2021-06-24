<template>
  <div><div class="title">hello title {{name}}</div><div class="desc">hello desc</div><Hello2 /></div>
</template>

<script>
    import Hello2 from './Hello2.vue'
    import { mapState } from 'vuex'
export default {
    components: {
        Hello2
    },

    computed: {
        ...mapState(['name'])
    }
}
</script>

<style lang="scss">
    div {
        .title {
            color: red
        }
        .desc {
            color: blue
        }   
    }
</style>