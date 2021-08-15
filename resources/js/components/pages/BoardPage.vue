<template>
    <div id="boardPage">
        <v-header></v-header>
        <board></board>
    </div>
</template>

<script>
import Header from '../Header.vue';
import Board from '../Board.vue';

export default {
    components: {
        'v-header' : Header,
        'board' : Board
    }
}
</script>
