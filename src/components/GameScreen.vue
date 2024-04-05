<script lang="ts" setup>

import StatsBar from "./StatsBar.vue";
import RandomCircle from "./RandomCircle.vue";
import {useStore} from "../stores";
const missSound = new Audio('/src/assets/miss.wav');

function playerMiss() {
    useStore().incrementMiss()
    useStore().calculateAccuracy()
    missSound.play()
}

</script>

<template>
    <div class="w-full h-screen bg-primary-dark  cursor-aim" @click="playerMiss">
        <StatsBar/>
        <RandomCircle v-if="useStore().playing" :difficulty=useStore().getDifficulty />
    </div>
</template>

<style scoped>

</style>