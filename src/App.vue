<script setup lang="ts">

import HomeScreen from "./components/HomeScreen.vue";
import TimeScreen from "./components/TimeScreen.vue";
import DifficultyScreen from "./components/DifficultyScreen.vue";
import GameScreen from "./components/GameScreen.vue";
import {useStore} from "./stores";
import GameOver from "./components/GameOver.vue";
import ReactionScreen from "./components/ReactionScreen.vue";
</script>

<template>
    <HomeScreen v-if="useStore().getStep === 0"/>
    <TimeScreen v-if="useStore().getStep === 1"/>
    <DifficultyScreen v-if="useStore().getStep === 2"/>
    <GameScreen v-if="useStore().getStep === 3"/>
    <GameOver v-if="useStore().getStep === 5"/>
    <ReactionScreen v-if="useStore().getStep === 6"/>

</template>

<style scoped>

</style>
