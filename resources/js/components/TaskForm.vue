<template>
    <b-modal @show="task = getCurrentTask()" @hide="task = {}; showDescriptionForm = showNameForm = false" id="taskModal" title=""  hide-footer hide-header>
        <h4 @click="showNameForm = true; showDescriptionForm = false" class="taskName" v-if="!showNameForm">{{ task.name }}</h4>
        <b-form @submit.prevent="editName" v-if="task && showNameForm">
            <b-form-group class="editing-text">
                <b-form-input v-model="task.name" placeholder="Название задачи"></b-form-input>
                <div class="input-buttons">
                    <b-button type="submit" variant="default">
                        <b-icon icon="check" variant="dark"></b-icon>
                    </b-button>
                    <b-button type="button" variant="default" @click="showNameForm = false">
                        &times;
                    </b-button>
                </div>
            </b-form-group>

        </b-form>
        <div @click="showDescriptionForm = true; showNameForm = false" class="taskDescription" v-if="!showDescriptionForm">
            {{ task.description ? task.description : 'Введите описание..' }}
        </div>
        <b-form @submit.prevent="editDescription" v-if="task && showDescriptionForm">
            
            <b-form-group>
                <b-form-textarea
                    v-model="task.description"
                    placeholder="Введите описание..."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Сохранить</b-button>
            <b-button type="button" variant="default" @click="showDescriptionForm = false">Отмена</b-button>
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
            task: {},
            showDescriptionForm: false,
            showNameForm: false,
        }
    },
    
    methods: {
        editDescription() {
          const result =  this.$store.dispatch('updateTask', {description: this.task.description, id: this.task.id});
          if(result)
          {
              this.showDescriptionForm = false;
          }
            
        },
        editName() {
          const result =  this.$store.dispatch('updateTask', {name: this.task.name, id: this.task.id});
          if(result)
          {
              this.showNameForm = false;
          }
        },
        ...mapGetters(['getCurrentTask'])
    }
})
</script>

<style scoped>
    .taskName, .taskDescription {
        padding: 10px;
        min-height: 20px;
        cursor: pointer;
        transition: all 0.1s;
        margin-bottom: 20px;
    }

    form {
        margin-bottom: 20px;
    }

    .taskName:hover, .taskDescription:hover {
        background: #eaeaea;
    }

    .editing-text {
        position: relative;
    }

    .editing-text input {
        font-size: 1.3rem;
        box-shadow: none;
    }

    .input-buttons {
        position: absolute;
        z-index: 2;
        right: 0;
    }

    .input-buttons button {
        background: #fff;
    }

    

</style>
