<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Overview from './components/Overview.vue'

const navItems = [{
  headline : 'Algorithm Learning Tool',
  title: 'Home',
  path: '/'
},{
  headline : 'Depth First Search',
  title: 'Depth First Search',
  path: '/DepthFirstSearch'
},{
  headline : 'Version Sort',
  title: 'Version Sort',
  path: '/VersionSort'
},{
  headline : 'Kadanes',
  title: 'Kadanes',
  path: '/Kadanes'
}]

const algorithm = ref('');

</script>
<template>
  <header class="p-20 grid h-screen place-items-center">
    <div>
      <Overview :msg="algorithm"/>
      <nav 
        class="
          text-sm text-left
          lg:mt-10 grid-flow-col grid
          auto-cols-max divide-x sm:mx-[-18px]"
      >
      <div v-for="route in navItems" :key="route.title" class="p-[0.5px]">
        <RouterLink 
          @click="algorithm = route.headline" 
          :to="route.path" >{{ route.title}}
        </RouterLink>
      </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;

}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a {
  display: inline-block;
  padding: 0 1rem;
}

</style>
