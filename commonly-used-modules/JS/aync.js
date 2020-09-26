async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();


function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}


await won’t work in the top-level code
People who are just starting to use await tend to forget the fact that we can’t use await in top-level code. For example, this will not work:

// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
But we can wrap it into an anonymous async function, like this:

(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();