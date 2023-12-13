<script setup>
const props = defineProps({
  advice:{
    type:String,
    required:true
  }
})

</script>
<template>
  <div class="body">
    <p id="output">
      "{{ advice }}"
    </p>
  </div>
</template>