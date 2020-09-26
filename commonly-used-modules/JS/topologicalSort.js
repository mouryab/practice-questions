/**
 * general topological sort
 * @author SHIN Suzuki (shinout310@gmail.com)
 * @param Array<Array> edges : list of edges. each edge forms Array<ID,ID> e.g. [12 , 3]
 *
 * @returns Array : topological sorted list of IDs
 **/

function tsort(edges) {
  const nodes   = {}, // hash: stringified id of the node => { id: id, afters: lisf of ids }
        sorted  = [], // sorted list of IDs ( returned value )
        visited = {}; // hash: id of already visited node => true

  const Node = function(id) {
    this.id = id;
    this.afters = [];
  }

  // 1. build data structures
  edges.forEach(v => {
    const from = v[0], 
           to = v[1];
    if (!nodes[from]) nodes[from] = new Node(from);
    if (!nodes[to]) nodes[to]     = new Node(to);
    nodes[from].afters.push(to);
  });

  console.log(nodes)

  // 2. topological sort
  Object.keys(nodes).forEach(function visit(idstr, ancestors) {
    var node = nodes[idstr],
        id   = node.id;

    // if already exists, do nothing
    if (visited[idstr]) return;

    if (!Array.isArray(ancestors)) ancestors = [];

    ancestors.push(id);

    visited[idstr] = true;

    node.afters.forEach(function(afterID) {
      if (ancestors.indexOf(afterID) >= 0)  // if already in ancestors, a closed chain exists.
        throw new Error('closed chain : ' +  afterID + ' is in ' + id);

      visit(afterID.toString(), ancestors.map(function(v) { return v })); // recursive call
    });

    sorted.unshift(id);
  });

  return sorted;
}

/**
 * TEST
 **/
function tsortTest() {

  // example 1: success
  var edges = [[1, 2], [1, 3], [2, 4], [3, 4] ];

  var sorted = tsort(edges);
  console.log(sorted);

  // example 2: failure ( A > B > C > A )
  edges = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A']
  ];

  sorted = tsort(edges);
  
  // example 3: generate random edges
  let max = 100, 
      iteration = 30;

  function randomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  edges = (() => {
    const ret = [];
    let i = 0;
    while (i++ < iteration) {
      ret.push( [randomInt(max), randomInt(max)] );
    }
    return ret;
  })();

  sorted = tsort(edges);
 
}