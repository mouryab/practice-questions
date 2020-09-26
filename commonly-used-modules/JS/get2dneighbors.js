var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function getNeighbors(arr, r, c) {
  const neighbors = [],
  		rowLen = (arr[0] && arr[0].length) || 0,
  		colLen = arr.length;

 
 if(c > 0) neighbors.push([r, c-1]);
 if(r > 0) neighbors.push([r-1, c]);
 if(r < rowLen - 1) neighbors.push([r+1, c]);
 if(c < colLen - 1) neighbors.push([r, c+1]);
 
  return neighbors;
}