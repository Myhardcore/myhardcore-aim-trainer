<script setup lang="ts">
function playSound() {
    const sound = new Audio('/src/assets/button-click.wav');
    sound.play();
}
</script>

<template>
    <button class="group relative h-12 w-48 text-lg border border-secondary-yellow" @click="playSound">
        <div
            class="absolute inset-0 w-3 bg-secondary-yellow transition-all duration-300 ease-out group-hover:w-full  "></div>
        <span class="relative group-hover:text-primary-dark text-secondary-yellow ">
                 <slot></slot>
            </span>
    </button>
</template>
