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
  <header>
    <div class="">
      <Overview :msg="algorithm"/>
      <nav 
        class="
          flex-row flex
          text-base justify-center 
          lg:mt-20 
          grid-cols
        "
      >
      <div v-for="route in navItems" :key="route.title">
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
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

div a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
