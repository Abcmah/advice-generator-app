<script setup>
import Title from './components/Title.vue';
import Body from './components/Body.vue';
import Divider from './components/Divider.vue';
import Button from './components/Button.vue';
import { ref } from 'vue';

let adviceText = ref("It is easy to sit up and take notice, what's difficult is getting up and taking action.")
let adviceId = ref(177)
const getRadom =()=>Math.floor(Math.random()*100)
const getAdvice = async()=>{
  let id =getRadom();
  const res = await fetch(`https://api.adviceslip.com/advice/${id}`)
  const data = await res.json();
  adviceText.value = data.slip.advice;
  adviceId = data.slip.id
}
console.log(adviceText.value);
</script>

<template>
  <div class="advice-co">
    <Title :no="adviceId"/>
    <Body :advice="adviceText"/>
    <Divider/>
    <Button @getadvice="getAdvice" />
  </div>
</template>