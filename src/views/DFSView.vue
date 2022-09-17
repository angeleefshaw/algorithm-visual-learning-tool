<script setup>
  import { onMounted, ref } from 'vue';
  import Node from '../modules/DFS/composables/CreateNode.js'
  import TreeNode from '../components/TreeNode.vue'

  let inputVal = ''
  let selectedNode = ''
  let Node1 = ref({})


  Node1 = new Node("A")
  Node1.addChild("B")
  const Node2 = Node1.children[0]
  Node2.addChild("C")
  Node2.addChild("D")
  const Node3 = Node1.children[2]
  console.log(Node1)


  function addNode(nv) {
    console.log(this.inputVal)
  }

</script>

<template>
  <div class="about justify-center flex-col">

    <div class=" py-10">
      <span class="text-base">Add Node</span>
      <input 
        id="node-value"
        v-model="inputVal"
        class="border-2 mx-4 px-3 py-1" 
        type="text">
      <button 
        type="button" 
        class="border-2 rounded px-3 py-1 hover:bg-blue-200"
        @click="addNode()"
      >Add</button>
    </div>

    <span>{{  Node1.name }}</span>
    <TreeNode v-for="node in Node1.children" :key="node.name" :node="node.children" :name="node.name"></TreeNode>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
