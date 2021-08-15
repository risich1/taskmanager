<template>
    <BoardPage/>
</template>


<script>
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
    import BoardPage from './pages/BoardPage.vue';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Vue from 'vue';
    import { mapGetters } from 'vuex';

    Vue.use(BootstrapVue)
    Vue.use(IconsPlugin)

    export default {
        computed: {
            ...mapGetters(['allСolumns'])
        },
        components: {
            BoardPage
        }
    }
</script>
