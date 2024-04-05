<script lang="ts" setup>

import {useStore} from "../stores";
import ScoreBoard from "./ScoreBoard.vue";
import TheButton from "./UI/TheButton.vue";
</script>

<template>

    <div class="grid place-items-center place-content-center w-full h-screen bg-primary-dark">
        <h1 class="uppercase text-5xl font-bold tracking-widest  text-secondary-yellow">
            Game Over
        </h1>
        <ScoreBoard/>
        <TheButton @click="useStore().gameReset()"> Play Again</TheButton>
    </div>

</template>

<style scoped>

</style>