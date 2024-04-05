<script lang="ts" setup>

import {useStore} from "../stores";
</script>

<template>

    <div class="border border-secondary-yellow border-dashed p-10 text-gray-400 my-20 font-light text-4xl">
        <div class="mb-2">Difficulty: <span class="text-secondary-yellow">{{ useStore().getDifficulty }} </span></div>
        <div class="mb-2">Time played: <span class="text-secondary-yellow"> {{ useStore().getTime }} </span></div>
        <div class="mb-2">Your score: <span class="text-secondary-yellow">{{ useStore().getScore }} </span></div>
        <div class="mb-2">Your accuracy: <span class="text-secondary-yellow">{{ useStore().getAccuracy }}% </span></div>
    </div>

</template>
