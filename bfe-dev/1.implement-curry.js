// 1. implement curry()
// JavaScript
// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

// curriedJoin(1, 2)(3) // '1_2_3'

/**
 * @param {Function} func
 */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}