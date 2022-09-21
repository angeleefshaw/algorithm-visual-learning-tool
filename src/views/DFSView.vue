<script setup>
  import { onMounted, ref } from 'vue';
  import Node from '../modules/DFS/composables/CreateNode.js'
  import TreeNode from '../components/TreeNode.vue'
import { root } from 'postcss';

  //DATA
  let inputVal = ref('');
  let selectedNode = ref('') ;
  let vertexActive = ref(false);
  let rootNode = ref({})
  let selectError = ref(false);

  const tree = []

  //ON CREATE
  rootNode = new Node("A")
  rootNode.addChild("B")
  const Node2 = rootNode.children[0]
  Node2.addChild("C")
  Node2.addChild("D")
  const Node3 = rootNode.children[2]

  tree.push(rootNode)

  //METHODS
  function addNode(nv) {
    if (!selectedNode) {
      this.selectError = true;
      return;
    }
    console.log(this.selectedNode)
    console.log(this.inputVal)
  }

  function setVertex (click) {
    this.vertexActive = ref(true);
    this.selectedNode = ref(click.target.textContent)
  }

</script>


<template>
  <div class="about justify-center flex-col col-span-2">

    <div class="pb-10">
      <span class="text-base">Add Node</span>
      <input 
        v-model="inputVal"
        class="border-2 mx-4 px-3 py-1" 
        type="text"
      >
      <span 
        v-if="selectError" 
        class="text-xs text-neutral-600" 
      >
        Please select a vertex to create a node
      </span>
      <button 
        type="button" 
        class="border-2 rounded px-3 py-1 hover:bg-blue-200"
        @click="addNode()"
      > Add
      </button>
    </div>

    <div @click="setVertex($event)">
      <TreeNode 
        v-for="node in tree" 
        :key="node.name" 
        :node="node.children" 
        :name="node.name">
      </TreeNode>

    </div>

  </div>
</template>