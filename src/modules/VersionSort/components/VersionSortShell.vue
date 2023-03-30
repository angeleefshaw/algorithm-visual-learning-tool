<script setup>
import { reactive } from 'vue'
import EngineerIcon from '../../../assets/icons/EngineerIcon.vue'
import Alert from '../../../components/Alert.vue'
import { useVersionSort } from '../store/VersionSortStore';
import { sortVersions } from '../composables/VersionSort'

const versionSort = useVersionSort()

const versions = versionSort.versions

const data = reactive({})


//METHODS
function shuffle() {
  versionSort.shuffleVersions()
}

function sort() {
  let list = versions.map(a => a.id);
  const sortedList = sortVersions(list);
  versionSort.setVersions(sortedList)
}

</script>

<template>
    <div class="about justify-center flex-col col-span-2">
      <Alert 
        :msg="'Currently at ' + versions.length + ' stable releases'"
        class="w-[35%] mb-20"
      >
      </Alert>
      <div class="grid-row">
        <button 
          type="button" 
          class="border-2 rounded mx-2 px-3 py-1 hover:bg-blue-200"
          @click="shuffle()"
        > Shuffle
        </button>
        <button 
          type="button" 
          class="border-2 rounded mx-2 px-3 py-1 hover:bg-blue-200"
          @click="sort()"
        > Sort
        </button>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
        <div 
          v-for="version in versions" 
          :key="version.id" 
          class="
            relative flex items-center 
            space-x-3 rounded-lg border 
            border-gray-300 bg-white 
            px-5 py-4 shadow-sm 
            focus-within:ring-2 focus-within:ring-indigo-500 
            focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div class="flex-shrink-0">
            <EngineerIcon class="w-10 h-10 rounded-full"></EngineerIcon>
          </div>
          <div class="min-w-0 flex-1">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" ></span>
              <p class="text-sm font-medium text-gray-900">{{ version.id }}</p>
              <p class="truncate text-sm text-gray-500">Anjerii Co.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
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