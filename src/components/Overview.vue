<script setup>
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="text-center lg:text-left">
    <h1 class="text-xs xl:text-2xl font-semibold mb-6">{{ msg ? msg : 'Algorithm Learning Tool'}} </h1>
    <h3 class="text-xxs xl:text-base hidden lg:block">
      Select an algorithm below to begin vizualizing
    </h3>
  </div>
</template>

<style scoped>

</style>
