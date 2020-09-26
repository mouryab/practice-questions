// 3. implement Array.prototype.flat()
// JavaScriptFacebook
// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]



/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  // your imeplementation here

  for (let i = 0; i < depth; i++) {
    let temp = [];
    let flag = false; 
    arr.forEach((item) => {
      if (item instanceof Array) {
        temp = temp.concat(item);
        flag = true;
      } else {
        temp.push(item);
      }
    });
    arr = temp;

    if (!flag) {
      break;
    }
  }

  return arr;

}