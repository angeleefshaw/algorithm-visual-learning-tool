<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="about justify-center flex-col col-span-2 p-10 ml-10">
    <TheWelcome />
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
