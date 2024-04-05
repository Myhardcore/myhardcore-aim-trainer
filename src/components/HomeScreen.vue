<script lang="ts" setup>
import {useStore} from "../stores";
import TheButton from "./UI/TheButton.vue";
const sound = new Audio('/src/assets/button-click.wav');

function startAim() {
    useStore().increment(1)
    sound.play();
}
function startReaction() {
    useStore().increment(6)
}
</script>

<template>

    <div class=" place-content-center w-full h-screen">
        <div class="grid grid-cols-2 text-center">
            <div class="bg-secondary-yellow h-screen flex flex-col justify-center items-center">
                <h1 class="uppercase text-5xl font-bold tracking-widest mb-10 text-primary-dark">
                    Myhardcore <br> aim
                </h1>
                <!--                Ебучая кнопка -->
                <button class="group relative h-12 w-48 text-lg border border-primary-dark" @click="startAim">
                    <div
                        class="absolute inset-0 w-3 bg-primary-dark transition-all duration-300 ease-out group-hover:w-full "></div>
                    <span class="relative group-hover:text-secondary-yellow text-primary-dark ">
                 Start Game
            </span>
                </button>
            </div>
            <div class="bg-primary-dark h-screen flex flex-col justify-center items-center">
                <h1 class="uppercase text-5xl font-bold tracking-widest mb-10 text-secondary-yellow ">
                    Myhardcore <br> reaction
                </h1>
                <TheButton @click="startReaction"> Start Game</TheButton>
            </div>
        </div>

    </div>

</template>

<style scoped>

</style>