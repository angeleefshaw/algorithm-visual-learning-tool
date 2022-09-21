<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name:'TreeNode',
  props: {
    node: Array,
    name: String
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
  >
    {{ name }}
  </button>
  
    <div class="replies" v-if="node.length > 0">
        <div  v-for="child in node" :key="child.name" >
            <TreeNode :node="child.children" :name="child.name"></TreeNode>
        </div>
    </div>
</template>