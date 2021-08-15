<template>
    <div id="board" class="container-fluid">
        <div class="row">
            <Column v-bind:key="column.id" :column="column" v-for="column in allСolumns"/>
        </div>
        <TaskForm/>
        <b-modal id="deleteModal" title="Точно удалить?">
        </b-modal>
    </div>
    
</template>

<script>
import Column from './Column.vue';
import TaskForm from './TaskForm.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allСolumns'])
    },

    async mounted() {
        this.getTasks();
        this.getColumns();
    },
    
    methods: {
        ...mapActions(['getTasks', 'getColumns'])
    },

    components: {Column, TaskForm}
}
</script>

<style scoped>
    .row {
        overflow: auto;
        flex-wrap: nowrap;
        height: 100vh;
    }

    #board {
        margin-top: 20px;
    }
</style>
