<script setup>
  import { reactive } from 'vue'

  //DATA
  let data = reactive({
    arr : [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
  })
  

</script>

<template>
    <div class="about justify-center col-span-2 flex flex-col space-y-10">
      <div class="flex-row flex space-x-4">
        <div v-for="number in data.arr" >
          <button type="button" 
            class="
                items-center rounded border
                border-gray-300 bg-white 
                text-xs font-medium text-gray-700 shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:ring-offset-2 hover:bg-gray-50 
                px-2.5 py-1.5 my-3 
              "
          >
            {{ number }}
          </button>
        </div>
      </div>


      
      <aside>
        Kadanes Algorithm aims to find the max sum for any subarray of consecutive integers.
      </aside>
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