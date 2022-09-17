// Depth First Search is a graph traversal algorithm that goes deep rather than wide.
// This means the traversal will follow the children of every node until it reaches the 
// last child node. It then returns to every node previously visited, and checks for any
// remaining children. This process repeats over and over until the graph has been traversed.

// The class below provides a way to create a graph (tree) and also provides a function to 
// return all node names using Depth First Search (from left to right)

export default class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      array.push(this.name)
      this.children.forEach(i =>{
        i.depthFirstSearch(array)
      })
      return array
    }
  }


// //Test case
// const Node1 = new Node("A")
// Node1.addChild("B")
// Node1.addChild("G")
// Node1.addChild("F")
// const Node2 = Node1.children[0]
// Node2.addChild("L")
// Node2.addChild("O")
// const Node3 = Node1.children[2]
// Node2.addChild("D")
// Node2.addChild("P")
// const Node4 = Node2.children[0]
// Node4.addChild("Z")
// Node4.addChild("X")

// // Returns [ 'A', 'B', 'L', 'Z', 'X', 'O', 'D', 'P', 'G', 'F']
// console.log(Node1.depthFirstSearch([]));