<script lang="ts" setup>

import {useStore} from "../stores";
import TheButton from "./UI/TheButton.vue";

</script>

<template>
    <div class="grid place-items-center place-content-center w-full h-screen bg-primary-dark">
        <h1 class="uppercase text-5xl font-bold  mb-10 text-secondary-yellow">
            Choose Difficulty
        </h1>
        <ul class="grid grid-cols-3 list-none">
            <li>
                <TheButton @click="useStore().chooseDifficulty('easy')"> Easy</TheButton>
            </li>
            <li>
                <TheButton @click="useStore().chooseDifficulty('medium')"> Medium</TheButton>
            </li>
            <li>
                <TheButton @click="useStore().chooseDifficulty('hard')"> Hard</TheButton>
            </li>
        </ul>

    </div>
</template>
