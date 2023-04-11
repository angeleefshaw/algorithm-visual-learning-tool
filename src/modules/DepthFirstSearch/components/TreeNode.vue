<script>
import { defineComponent, defineProps, computed } from 'vue';

export default defineComponent({
  name:'TreeNode',
  props: {
    node: Array,
    name: String,
    nodeIndex: Number
  },
})


</script>
<template>
  <button type="button" 
    class="
        items-center rounded border
        border-gray-300 bg-white 
        text-xs font-medium text-gray-700 shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:ring-offset-2 hover:bg-gray-50 
        px-2.5 py-1.5 my-3
      "
      :class="{ 
        'mr-28' : nodeIndex % 2 == 0 && nodeIndex !== 0,  
        'ml-28' : nodeIndex % 2 !== 0 && nodeIndex !== 0 
      }"
  >
    {{ name }}
  </button>
  
    <div class="replies" v-if="node.length > 0">
        <div  v-for="(child, index) in node" :key="child.name" >
            <TreeNode 
              :node="child.children" 
              :name="child.name" 
              :node-index="nodeIndex + 1"
            >
            </TreeNode>
        </div>
    </div>
</template>