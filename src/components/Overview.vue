<script setup>
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="">
    <h1 class="text-4xl font-semibold mb-6">{{ msg ? msg : 'Algorithm Learning Tool'}} </h1>
    <h3 class="text-xl">
      Select an algorithm below to begin vizualizing
    </h3>
  </div>
</template>

<style scoped>

</style>
