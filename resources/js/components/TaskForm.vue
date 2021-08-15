<template>
    <b-modal @show="task = getCurrentTask()" id="taskModal" title="Задача"  hide-footer>
        <b-form @submit.prevent="editDescription" v-if="task">
            <b-form-group>
                <b-form-textarea
                    v-model="task.description"
                    placeholder="Введите описание..."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Сохранить</b-button>
            <b-button type="button" variant="default">Отмена</b-button>
        </b-form>
    </b-modal>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';


export default ({
    mounted() {
    },
    data() {
        return {
            task: {}
        }
    },
    
    methods: {
        editDescription() {
          const result =  this.$store.dispatch('updateTask', {description: this.task.description, id: this.task.id});
          if(result)
          {
              alert('Успех');
              this.$bvModal.hide('taskModal');
          }
            
        },
        ...mapGetters(['getCurrentTask'])
    }
})
</script>
