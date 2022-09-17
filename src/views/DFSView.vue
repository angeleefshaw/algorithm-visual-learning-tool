<script setup>
  import { onMounted, ref } from 'vue';
  import Node from '../modules/DFS/composables/CreateNode.js'

  let inputVal = ''
  let selectedNode = ''
  let Node1 = ref({})


    Node1 = new Node("A")
    Node1.addChild("B")
    const Node2 = Node1.children[0]
    Node2.addChild("C")
    Node2.addChild("D")
    const Node3 = Node1.children[2]

    console.log(typeof(Node1))


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


    <span>{{Node1.name}}</span>
    <template v-for="value in Node1.children" :key="value.name">
      <span class="font-bold text-xl">{{value.name}}</span>
      <ol v-for="children in value.children" :key="children.name">
        {{children.name}}
      </ol>
    </template>
    
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
