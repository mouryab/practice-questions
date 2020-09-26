let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        reject("I haven't completed learning JS yet.");
    }
});

// When you call the new Promise(executor), the executor is called automatically. 

// Inside the executor, you manually call the resolve() function
//  if the executor is completed successfully and invoke the reject() function 
//  	in case of an error occurs.


// After about 3 seconds, type the learnJS in the console window, you will see that the state of the promise becomes resolved
// and the promise value is the string that we passed to the resolve() function.

let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});


// 


learnJS
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => createApp());

    
// Once the promise reaches either fulfilled state or rejected state, it stays in that state and can’t switch.

// In other words, a promise cannot go from the fulfilled state to the rejected state and vice versa.
 // It also cannot go back from the fulfilled state or rejected state to the pending state.


// Practical JavaScript Promise example
// The following function returns a Promise object that loads data from a remote file:

 function load(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.onreadystatechange = function (e) {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    reject(this.status);
                }
            }
        }
        request.open('GET', url, true);
        request.send();
    });
}


// Inside the executor, we called resolve() function and passed in the response if the HTTP status code is 200,
// otherwise, we invoked the reject() function and passed in the HTTP status code.

// Register the button click event listener and call the then() method on the Promise. 
// If the load is successful, then we show the message returned from the server.
// Otherwise, we show the error message with the HTTP status code.

const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');
btn.onclick = function () {
    load('https://www.javascripttutorial.net/sample/promise/api.json')
        .then(
            response => {
                const result = JSON.parse(response);
                msg.innerHTML = result.message;
            },
            error => msg.innerHTML = `Error getting the message, HTTP status: ${error}`
        );
}