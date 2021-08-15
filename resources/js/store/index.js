import Vue from 'vue';
import VueX from 'vuex';
import Task from './modules/task';
import Column from './modules/Column';
import Ajax from '../helpers/ajax';

Vue.use(VueX, Ajax);

export default new VueX.Store({
    actions: {

    },

    mutations: {

    },
    state: {

    },
    getters: {
    
    },
    modules: {
        Task, Column
    }
});