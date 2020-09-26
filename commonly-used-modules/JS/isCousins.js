var isCousins = function(root, x, y) {
  let queue = [tree],
      level = 0, 
      hash = {'x': null; 'y': null};
  
  // start - we are using this special logic to count level. no additional space
    queue.push(null);
  // end -  we are using this special logic to count level. no additional space
  
  while (queue.length > 0) {
    let node = queue.shift();

    // start - we are using this special logic to count level. no additional space
    if(node === null) {
      level++;
      queue.push(null);
      if(queue.shift() === null) break;// You are encountering two consecutive `nulls` means, you visited all the nodes.
      else continue;
    }
    // end -  we are using this special logic to count level. no additional space
    
    if (node.left != null)  queue.push(node.left);
    if (node.right != null) queue.push(node.right);
    checkNodes(node.left, level);
    checkNodes(node.right, level);
  }
  

    function checkNodes(n, l) {
        if(n === x) hash['x'] = l;
        else if(n == y) hash['y'] = l;
    }
  
  return hash['x'] && (hash['x'] === hash['y']);
};