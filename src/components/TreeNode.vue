<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name:'TreeNode',
  props: {
    node: Array,
    name: String
  },
  // setup (props) {
  //   console.log(JSON.parse(JSON.stringify(props)))
  // }
})

</script>
<template>
    <li class="text-xxl cursor-pointer py-4 font-bold text-2xl">
        {{ name }}
    </li>
    <li class="cursor-pointer font-bold text-2xl">{{ node.children }}</li>

    <div class="replies" v-if="node.length > 0">
        <div  v-for="child in node" :key="child.name" >
            <TreeNode :node="child.children" :name="child.name"></TreeNode>
        </div>
    </div>
</template>