<script setup>
import Title from './components/Title.vue';
import Body from './components/Body.vue';
import Divider from './components/Divider.vue';
import Button from './components/Button.vue';
import { ref } from 'vue';

let adviceText = ref("It is easy to sit up and take notice, what's difficult is getting up and taking action.")
const getRadom =()=>{
  return Math.floor(Math.random()*100)
}
const getAdvice = async()=>{
  let id =getRadom();
  const res = await fetch(`https://api.adviceslip.com/advice/${id}`)
  const data = await res.json();
  adviceText.value = data.slip.advice;
  // console.log(data)/;
}
</script>

<template>
  <div class="advice-co">
    <Title no="177"/>
    <Body :advice="adviceText"/>
    <Divider/>
    <Button @getadvice="getAdvice" />
  </div>
</template>