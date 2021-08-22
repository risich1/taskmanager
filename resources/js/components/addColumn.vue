<template>
    <div>
        <b-button class="add"> + </b-button>
    </div>
</template>

<script>

import { mapActions, mapMutations } from 'vuex';

export default ({

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
