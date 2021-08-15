<template>
    <div class="col-md-2 column-wrap">
        <div class="column">
            <template v-if="column.id">
                <div class="column-title">
                    {{ column.name }} ({{ tasksByColumnId(column.id).length }} задачи)
                </div>

                <Task v-bind:key="task.id" :task="task" v-for="task in tasksByColumnId(column.id)" />

                <addButton :column="column.id"/>
            </template>
            <template v-if="!column.id">
                <div class="column-title">
                    <b-form-input v-model="newColumnName"></b-form-input>
                    <b-button>добавить</b-button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue';
import addButton from './addTask.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['column'],
    data() {
        return {
            newColumnName: '',
        }
    },
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
