<script setup>
  import { reactive, ref } from 'vue';
  import Node from '../modules/DepthFirstSearch/composables/CreateNode.js'
  import TreeNode from '../modules/DepthFirstSearch/components/TreeNode.vue'

  //DATA
  let data = reactive({
    rootNode : '',
    tree : [],
    DFSArr: []
  })

  //ON CREATE
  data.rootNode = new Node("M")
  data.rootNode.addChild("B")
  data.rootNode.addChild('T')

  const Node2 = data.rootNode.children[0]
  Node2.addChild("Q")
  Node2.addChild("D")

  const Node3 = Node2.children[1]
  Node3.addChild("P")
  Node3.addChild("Z")
  Node3.addChild("W")
 
  const Node4 = Node2.children[0]
  Node4.addChild("J")
  Node4.addChild("I")

  data.tree.push(data.rootNode)


  function dFS () {
    this.DFSArr = this.data.rootNode.depthFirstSearch([]);
    console.log(this.DFSArr)
  }

</script>


<template>
  <div class="about justify-center flex-col col-span-2">
    <button 
      class="border-2 rounded px-3 py-1 hover:bg-blue-200" 
      @click="dFS()"
    >
      Depth First Search!
    </button>

    <TreeNode 
      v-for="(node, index) in data.tree" 
      :key="node.name" 
      :node="node.children" 
      :name="node.name"
      :node-index="index"
    >
    </TreeNode>

    <div v-if="DFSArr">{{DFSArr}}</div>

  </div>
</template>