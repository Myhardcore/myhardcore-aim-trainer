<script setup lang="ts">
import {ref} from "vue";
const showBlock = ref<boolean>(false)
const timer = ref<number>(0)
const reactionTime = ref<number>(0)
const props = defineProps({
    delay: Number as () => number
})
const emit = defineEmits({
    end: (reactionTime: number) => reactionTime
})
setTimeout(()=>{
    showBlock.value = true
    startTimer()
}, props.delay)

function startTimer(){
timer.value = setInterval(()=> {
    reactionTime.value += 10
}, 10)
}
function endTimer(){
clearInterval(timer.value)
emit('end', reactionTime.value)}
</script>

<template>
    <div v-if="!showBlock" class="w-40 h-40  border border-dashed border-secondary-yellow text-3xls text-secondary-yellow flex justify-center items-center"> WAIT...</div>
    <div v-if="showBlock" class="w-40 h-40 bg-secondary-yellow " @click="endTimer"></div>
</template>

<style scoped>

</style>