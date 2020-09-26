function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  let len = arr.length;
  
  if (len === 1) return arr[0];
  
  let map = new Map(),
      startIdx = 0,
      endIdx = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(map.has(str[i])) {
      endIdx = i - 1;
      console.log(map);
      if(map.size === len) {
        return str.slice(startIdx, endIdx);
      } else {
        startIdx = map.get(str[i]) + 1;

       for(let [k,v] in map.entries()) {
         if(v < startIdx) {
          map.delete(k);
         } else break;
       }
        
        endIdx = i;
        map.set(str[i], i);
      }
      
    } else {
      map.set(str[i], i);
      endIdx++;
    }
    
  }
  
 
  
  return str.slice(startIdx, endIdx);
  
}

let arr=  ['x','y','z'], str = "xyyzyzyx";

console.log(getShortestUniqueSubstring(arr, str));


// time complexity - O(length of the string)
 // space complexity - O(size of the array)