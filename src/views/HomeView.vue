<script setup>
import About from '../components/About.vue'
</script>

<template>
  <main class="about justify-center flex-col col-span-2 p-10 ml-10">
    <About></About>
  </main>
</template>

<style>
    @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
