<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {useStore} from "../stores";

const store = useStore()
const timeLeft = ref<number>(0)

function startTimer(): void {
    timeLeft.value = store.getTime
    const timer = setInterval(() => {
        timeLeft.value--
        if (timeLeft.value === 0) {
            clearInterval(timer)
        }
    }, 1000)
}

const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
})

startTimer()

watch(timeLeft, (newValue) => {
    if (newValue === 0) {
        store.gameOver()
    }
});

const accuracy = computed(() => {
    return store.getAccuracy
})

</script>

<template>
    <nav class="flex justify-between px-20  items-center w-full text-tertiary-white bg-absolute-black py-2">
        <h1 class="text-xl text-gray-400 font-bold">Time : <span class="text-secondary-yellow">
            {{ formattedTime }}</span></h1>
        <h1 class="text-xl text-gray-400 font-bold">Hits : <span class="text-secondary-yellow">
            {{ store.getScore }}
        </span></h1>
        <h1 class="text-xl text-gray-400 font-bold">Accuracy : <span class="text-secondary-yellow">
            {{ accuracy }}%
        </span></h1>
        <div class="flex gap-3">
            <img
                :class="{'opacity-40':useStore().getLives === 2 || useStore().getLives === 1 || useStore().getLives === 0}"
                alt="red-heart"
                class="w-6 h-6 " src="../assets/red-heart-icon.png">
            <img :class="{'opacity-40':useStore().getLives === 1 || useStore().getLives === 0}" alt="red-heart"
                 class="w-6 h-6" src="../assets/red-heart-icon.png">
            <img :class="{'opacity-40':useStore().getLives === 0}" alt="red-heart" class="w-6 h-6"
                 src="../assets/red-heart-icon.png">
        </div>

    </nav>
</template>

