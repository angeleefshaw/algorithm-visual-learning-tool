<script setup>
  import { reactive, ref } from 'vue';
  import Node from '../modules/DFS/composables/CreateNode.js'
  import TreeNode from '../components/TreeNode.vue'

  //DATA
  let data = reactive({
    "inputVal": '',
    "selectedNode": '',
    "vertexActive": false,
    "rootNode": '',
    "selectError": false,
    "tree": []
  })

  //ON CREATE
  data.rootNode = new Node("A")
  data.rootNode.addChild("B")
  const Node2 = data.rootNode.children[0]
  Node2.addChild("C")
  Node2.addChild("D")
  const Node3 = data.rootNode.children[2]

  data.tree.push(data.rootNode)

  //METHODS
  function addNode(nv) {
    if (this.data.selectedNode.length < 1) {
      this.data.selectError = ref(true);
      return;
    }
    console.log(this.data.selectedNode)
    console.log(this.data.inputVal)
  }

  function setVertex (click) {
    this.data.vertexActive = ref(true);
    this.data.selectedNode = ref(click.target.textContent)
  }

</script>


<template>
  <div class="about justify-center flex-col col-span-2">
    <span v-if="data.selectError" class="text-xs text-red-600 my-1">
        Please select a vertex to create a node
    </span>
    <div class="pb-10">
      <span class="text-base">Add Node</span>
      <input 
        v-model="data.inputVal"
        class="border-2 mx-4 px-3 py-1" 
        type="text"
      >
      <button 
        type="button" 
        class="border-2 rounded px-3 py-1 hover:bg-blue-200"
        @click="addNode()"
      > Add
      </button>
    </div>

    <div @click="setVertex($event)">
      <TreeNode 
        v-for="node in data.tree" 
        :key="node.name" 
        :node="node.children" 
        :name="node.name">
      </TreeNode>

    </div>

  </div>
</template>