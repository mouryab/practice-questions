// Breadth First Search
// In a breadth first search you will start at the root node. 
// BFS visits the neighbor vertices before visiting the child vertices, and a queue is used in the search process. 
// 1. Visit the adjacent unvisited vertex. Mark it as visited. Display it. Insert it in a queue.
// 2. If no adjacent vertex is found, remove the first vertex from the queue.
// Repeat Rule 1 and Rule 2 until the queue is empty.

class Tree {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const breadthFirstTraversal = (tree, callback) => {
  if (tree == null) {
    return;
  }

  let queue = [tree];

  while (queue.length > 0) {
    let node = queue.shift(),
        value = node.value;
    callback(value);

    if (node.left == null && node.right == null) {
      continue;
    }
    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right != null) {
      queue.push(node.right);
    }

  }
}

t = new Tree(1, new Tree(2, null, null), new Tree(3, new Tree(4, null, null), null))

breadthFirstTraversal(t, console.log);