<script lang="ts" setup>

import {useStore} from "../stores";
import TheButton from "./UI/TheButton.vue";
</script>

<template>
    <div class="grid place-items-center place-content-center w-full h-screen bg-primary-dark">
        <h1 class="uppercase text-5xl font-bold  mb-10 text-secondary-yellow">
            Choose Time
        </h1>
        <ul class="grid grid-cols-5 list-none">
            <li>
                <TheButton @click="useStore().chooseTime(10)"> 10 sec</TheButton>
            </li>
            <li>
                <TheButton @click="useStore().chooseTime(30)"> 30 sec</TheButton>
            </li>
            <li>
                <TheButton @click="useStore().chooseTime(60)"> 1 min</TheButton>
            </li>
            <li>
                <TheButton @click="useStore().chooseTime(120)"> 2 min</TheButton>
            </li>
            <li>
                <TheButton @click="useStore().chooseTime(300)"> 5 min</TheButton>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>