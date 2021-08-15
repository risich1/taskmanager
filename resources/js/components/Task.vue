<template>
    <div class="task">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="block-title">
                <h5 @click="showDetail(task.id)" class="card-title">{{ task.name }}</h5>
                <Dropdown>
                    <b-dropdown-item @click="deleteTask(task.id)">Удалить</b-dropdown-item>
                </Dropdown>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Dropdown from './UI/DropdownOptions.vue';
    import TaskForm from './TaskForm.vue';

    export default {
        props: ['task'],
        components: {Dropdown, TaskForm},
        mounted() {
            console.log('Component mounted.')
        },
        
        methods: {
            async deleteTask(id)
            {
                await this.$store.dispatch('deleteTask', id);
            },
            
            async showDetail(id)
            {
                await this.$store.dispatch('getTask', id);
                this.$bvModal.show('taskModal');
            }
        }
    }
</script>

<style scoped>
    .task {
        margin-bottom: 10px;
    }

    h5 {
        font-size: 1rem;
        margin: 0;
    }

    .card-body {
        padding: 12px;
        min-height: 70px;
    }

    .card-title {
        cursor: pointer;
        word-break: break-all;
    }

    .block-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
</style>
