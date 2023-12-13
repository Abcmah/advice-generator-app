<script setup>
 import icon from './icons/icon-dice.svg'
 const emit = defineEmits(['getadvice'])
 const getAdvice =()=>{
    console.log("click")
    emit('getadvice')
 }
</script>
<template>
    <div @click="getAdvice" class="btn">
        <img :src="icon" alt="">
    </div>
</template>
