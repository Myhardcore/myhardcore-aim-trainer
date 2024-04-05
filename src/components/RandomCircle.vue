<script lang="ts" setup>
import {computed, onUnmounted, ref} from "vue";
import {useStore} from "../stores";


const showCircle = ref<boolean>(false);
const circleColors: string[] = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
const circleSize = ref<string>('40px');
const circleTop = ref<string>('50%');
const circleLeft = ref<string>('50%');
const screenWidth: number = window.innerWidth ;
const screenHeight: number = window.innerHeight;
const props = defineProps({
    difficulty: String
})
const hitSound = new Audio('/src/assets/hit.wav');
const isClicked = ref<boolean>(false);

const animationTime = computed(() => {
    if (props.difficulty === 'easy') {
        return 1500
    } else if (props.difficulty === 'medium') {
        return 1000
    } else if (props.difficulty === 'hard') {
        return 500
    }
})
const delayTime = computed(() => {
    if (props.difficulty === 'easy') {
        return 3000
    } else if (props.difficulty === 'medium') {
        return 2000
    } else if (props.difficulty === 'hard') {
        return 1000
    }
})

function transitionTime(): string {
    if (props.difficulty === 'easy') {
        return 'animate-[skukojit_2s_ease-in-out_infinite]'
    } else if (props.difficulty === 'medium') {
        return 'animate-[skukojit_1.5s_ease-in-out_infinite]'
    } else if (props.difficulty === 'hard') {
        return 'animate-[skukojit_1s_ease-in-out_infinite]'
    }
    return ''
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(): string {
    return circleColors[getRandomNumber(0, circleColors.length - 1)]
}

let start: number

function animateCircle(): void {
    isClicked.value = false
    showCircle.value = true;
    circleTop.value = `${getRandomNumber(100, screenHeight - 100)}px`;
    circleLeft.value = `${getRandomNumber(100, screenWidth - 100)}px`;

    setTimeout(() => {
        showCircle.value = false;

        if (!isClicked.value && useStore().getLives > 0 && useStore().getPlaying) {
            useStore().decrementLives()
        }

    }, animationTime.value);
}

function startAnimation(): void {
    start = setInterval(() => {
        if (useStore().getLives === 0) {
            useStore().gameOver()
        } else {
            animateCircle();
        }
    }, delayTime.value);
}

startAnimation();

function circleClicked(): void {
    hitSound.play();
    useStore().incrementScore()
    useStore().calculateAccuracy()
    showCircle.value = false
    isClicked.value = true
}
onUnmounted(() => {
    clearInterval(start)
})
</script>

<template>
    <div
        v-if="showCircle"
        :class="{ [getRandomColor()]:true, [transitionTime()]:true }"
        :style="{ top: circleTop, left: circleLeft, width: circleSize, height: circleSize }"
        class="absolute z-20 rounded-full "
        @click.stop="circleClicked"
    ></div>
</template>
