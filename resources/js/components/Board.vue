<template>
    <div id="board" class="container-fluid">
        <div class="row">
            <Column v-bind:key="column.id" @onCancelMake="onCanselMakeColumn" @onAdded="onAddedColumn" :column="column" v-for="column in allСolumns"/>
            <div class="col-md-1">
                <b-button v-if="!newColumn" class="add" @click="addEmptyColumn"> + </b-button>
            </div>
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

    data() {
        return {
            newColumn: false
        }
    },

    async mounted() {
        this.getColumns();
        this.getTasks();
    },
    
    methods: {
        onCanselMakeColumn() {
            this.$store.commit('deleteEmptyColumn');
            this.newColumn = false;
        },
        onAddedColumn() {
            this.newColumn = false;
        },
        addEmptyColumn()
        {
            this.newColumn = true;
            this.$store.commit('addColumn',{id: null, name: null});
        },
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

        .add {
        display: block;
        width: 100%;
        border: 0;
        line-height: 1;
        font-weight: bold;
        color: #6d6d6d;
        padding: 8px 15px;
        background: transparent;
        transition: all 0.1s;
        width: auto;
    }

    .add:hover, .add:active, .add:visited {
        background: #e4e4e4;
        color: #6d6d6d;
        box-shadow: none;
    }

    .column-wrap:hover .add {
        opacity: 1;
        pointer-events: all;
    }
</style>
