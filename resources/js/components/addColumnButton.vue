<template>
    <div>
     <b-button  v-show="!formShow" @click="formShow = true" class="add">add +</b-button>
     <b-form @submit.prevent="add" v-show="formShow">
         <b-form-group>
            <b-form-textarea v-model="name" no-resize></b-form-textarea>
         </b-form-group>

         <b-form-group>
            <b-button type="submit">Создать1</b-button>
            <b-button @click="formShow = false" variant="danger" type="button">Отмена</b-button>
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
    padding: 8px 15px;
    background: #00000021;

    }
</style>
