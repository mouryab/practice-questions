function getCheapestCost(rootNode) {
  
  if(rootNode === null) return 0;
  if(rootNode.children.length === 0) return rootNode.cost;
  
  root.cumulativeCost  = rootNode.cost;
  let n = rootNode.numberOfChildren();
  let minCost = Number.MAX_SAFE_INTEGER;
    for(let i=0; i< n; i++) {
     let tempCost = getCheapestCost(rootNode.child[i]);
       if (tempCost < minCost) minCost = tempCost;
    }
    
    return minCost + rootNode.cost
}

function Node(cost) {
  this.cost = cost;
  this.children = [];
}