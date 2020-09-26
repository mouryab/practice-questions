// 2. implement curry() with placeholder support
// JavaScript
// This is a follow-up on 1. implement curry()

// please implement curry() which also supports placeholder.

// Here is an example

// const  join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// const _ = curry.placeholder

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(_, 2)(1, 3) // '1_2_3'

// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

/**
 * @param { Function } func
 */
function curry(func) {
  // write your implementation here 

   return function curried(...args) {
    args = args.slice(0, func.length);
    if (args.indexOf(curry.placeholder) === -1 && args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        let args3 = Array.from(args);
        let startI = args3.indexOf(curry.placeholder);
        if (startI !== -1) {
          args2.forEach((item, index) => {
            while (
                args3[startI + index] !== curry.placeholder &&
              startI + index < args3.length
            ) {
              startI++;
            }
            args3[startI + index] = args2[index];
          });
        } else {
            args3 = args3.concat(args2);
        }
        return curried.apply(null, args3);
      };
    }
  };

}
curry.placeholder = Symbol()