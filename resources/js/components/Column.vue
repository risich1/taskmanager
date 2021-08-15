<template>
    <div class="col-md-2">
        <div class="column">
            <div class="column-title">
                {{ column.name }} ({{ tasksByColumnId(column.id).length }} задачи)
            </div>

                <Task v-bind:key="task.id" :task="task" v-for="task in tasksByColumnId(column.id)" />

            <addButton :column="column.id"/>

        </div>
    </div>
</template>

<script>
import Task from './Task.vue';
import addButton from './addColumnButton.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['column'],
    computed: {
        ...mapGetters(['tasksByColumnId'])
    },

    components: {Task, addButton}
}

</script>

<style scoped>
    .col-md-2 {
        background: rgb(244, 245, 247);
        margin-left: 5px;
        margin-right: 5px;
    }

    .column-title {
        padding: 10px;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.125);
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }
</style>
