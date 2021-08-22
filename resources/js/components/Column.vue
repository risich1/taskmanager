<template>
    <div class="col-md-2 column-wrap">
        <div class="column">
            <template v-if="column.id">
                <div class="column-title">
                    <EditInput @action="editName" :text="column.name" placeholder="Название колонки" variant="small"/>
                    <Dropdown>
                        <b-dropdown-item @click="deleteColumn(column.id)">Удалить</b-dropdown-item>
                    </Dropdown>
                </div>

                <Task v-bind:key="task.id" :task="task" v-for="task in tasksByColumnId(column.id)" />

                <addButton :column="column.id"/>
            </template>
            <template v-if="!column.id">
                <div class="column-title">
                    <EditInput @action="editName" :text="column.name" @onCancel="onCancelMakeColumn"  placeholder="Название колонки" :showForm="true" variant="small"/>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue';
import addButton from './addTask.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import EditInput from './UI/EditInput.vue';
import Dropdown from './UI/DropdownOptions.vue';


export default {
    props: ['column'],
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters(['tasksByColumnId'])
    },

    methods: {
        editName(name) {

            if(!this.column.id)
            {
                this.addColumn({name})
                this.$emit('onAdded')
                return true;
            }

            this.updateColumn({id: this.column.id, name});
        },

        onCancelMakeColumn() {
            this.$emit('onCancelMake');
        },

        deleteColumn(id) {
            this.$store.dispatch('deleteColumn', id)
        },

        ...mapActions(['updateColumn', 'addColumn']),
        ...mapMutations(['deleteEmptyColumn'])
    },

    components: {Task, addButton, EditInput, Dropdown}
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
