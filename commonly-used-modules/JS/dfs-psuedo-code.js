// depth first search


var dfs = function(root) {
	if(root ===  null)  return;

	// visit(root);
	root.visited = true;
	for(let n in root.adjacent) {
		if(n.visited === false) {
			search(n);
		}
	}
}