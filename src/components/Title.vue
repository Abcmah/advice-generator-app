<script setup>
  const props = defineProps({
    no:{
      type:Number,
      required:true
    }
  }) 
</script>
<template>
  <div class="title">
    ADVICE  #<span id="id">{{no}}</span>
  </div>
</template>
