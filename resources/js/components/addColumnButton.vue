<template>
    <div>
     <b-button  v-if="!formShow" @click="formShow = true" class="add">+ Создать задачу</b-button>
     <b-form @submit.prevent="add" v-if="formShow">
         <b-form-group>
            <b-form-textarea v-model="name" no-resize></b-form-textarea>
         </b-form-group>

         <b-form-group>
            <b-button type="submit">Создать</b-button>
            <b-button @click="formShow = false" variant="default" type="button">Отмена</b-button>
         </b-form-group>
     </b-form>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default ({
    props: ['column'],
    data() {
        return {
            name: '',
            formShow: false
        }
    },
    methods: {
        async add(e) {
            e.preventDefault();
            if(this.name)
            {
                let status = this.addTask({name: this.name, column_id: this.column});
                if(status)
                {
                    this.name = ''; this.formShow = false;
                }
            }
        },

        ...mapActions(['addTask'])
    }
})
</script>

<style scoped>
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
        opacity: 0;
        pointer-events: none;
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
