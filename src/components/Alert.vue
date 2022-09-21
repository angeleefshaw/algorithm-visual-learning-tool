<script setup>
import SuccessIcon from '../assets/icons/SuccessIcon.vue'

defineProps({
  msg: {
    type: String,
    required: false
  }
})

</script>

<template>
  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <SuccessIcon class="w-5 h-5"></SuccessIcon>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-green-800">{{msg}}</p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button type="button" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>