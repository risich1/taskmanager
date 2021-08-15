<template>
    <div>
        <b-button  v-if="!emptyColumn" @click="addEmptyColumn" class="add"> + </b-button>
    </div>
</template>

<script>

import { mapActions, mapMutations } from 'vuex';

export default ({
    props: ['column'],
    data() {
        return {
            name: '',
            emptyColumn: false
        }
    },
    methods: {
        addEmptyColumn() {
            this.addColumn({});
            this.emptyColumn = true;
        },
        async add(e) {
            e.preventDefault();
            if(this.name)
            {
                let status = await this.$store.dispatch('addColumn', {name: this.name});
                if(status)
                {
                    this.name = ''; this.formShow = false;
                }
            }
        },

        // ...mapActions(['addColumn']),
        ...mapMutations(['addColumn', 'deleteEmptyColumn'])
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
