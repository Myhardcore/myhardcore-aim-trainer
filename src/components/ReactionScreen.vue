<script lang="ts" setup>
import TheButton from "./UI/TheButton.vue";
import {ref} from "vue";
import ReactionBlock from "./ReactionBlock.vue";
import {useStore} from "../stores";

const isPlaying = ref<boolean>(false)
const delay = ref<number>(0)
const score = ref<number>(0)
const showScore = ref<boolean>(false)

function endGame(reactionTime: number) {
    isPlaying.value = false
    score.value = reactionTime
    showScore.value = true
}

function startGame() {
    isPlaying.value = true
    delay.value = 2000 + Math.random() * 5000
}
function resetGame() {
    isPlaying.value = false
    showScore.value = false
    delay.value = 0
    score.value = 0
}
function backToHome() {
    useStore().gameReset()
    resetGame()
}
</script>

<template>
    <div class="grid place-items-center place-content-center w-full h-screen bg-primary-dark">
        <div v-if="!isPlaying && !showScore">
            <h1 class="uppercase text-5xl font-bold  mb-20 text-secondary-yellow ">
            Reaction game
        </h1>
            <h3 class="text-secondary-yellow mb-2 text-center text-lg font-semibold uppercase">How to play:</h3>
            <p class="text-tertiary-white mb-10 text-center font-light text-lg">1. Click on play button <br> 2. Dashed block
                will appear <br> 3. Wait for it to be filled <br> 4. Click on filled block</p>
        </div>

        <TheButton v-if="!isPlaying && !showScore" @click="startGame"> Play</TheButton>
        <ReactionBlock v-if="isPlaying" :delay="delay" @end="endGame"/>
        <div v-if="showScore">
        <h3 class="text-secondary-yellow mb-2 text-center text-lg font-semibold uppercase">Reaction time:</h3>
        <p class="text-tertiary-white mb-10 text-center font-light text-lg">{{score}} ms</p>
        <TheButton @click="resetGame"> Play Again</TheButton>
            <TheButton @click="backToHome"> Home</TheButton>
        </div>

    </div>
</template>

<style scoped>

</style>