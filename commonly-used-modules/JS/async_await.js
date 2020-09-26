// Introduction to JavaScript async / await keywords
// In the past, to deal with asynchronous operations, you often used the callback functions.
// However, when you nest many callback functions, the code will be more difficult to maintain. 
// And you end up with a notorious issue which is known as the callback hell.

// Suppose that you need to perform three asynchronous operations in the following sequence:
// Select user from the database.
// Get services of the user from an API.
// Calculate the service cost based on the services from the server. 
// The following functions illustrates the three tasks. 
// Note that we use the setTimeout() function to simulate the asynchronous operation.

function getUser(userId, callback) {
    console.log('Get user from the database.');
    setTimeout(() => {
        callback({
            userId: userId,
            username: 'john'
        });
    }, 1000);
}

function getServices(user, callback) {
    console.log(`Get services of ${user.username} and ${user.userId} from the API.`);
    setTimeout(() => {
        callback(['Email', 'VPN', 'CDN']);
    }, 2 * 1000);
}

function getServiceCost(services, callback) {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
        callback(services.length * 100);
    }, 3 * 1000);
}
// The following shows the nested callback functions:

getUser(100, (user) => {
    getServices(user, (services) => {
        getServiceCost(services, (cost) => {
            console.log(`The service cost is ${cost}`);
        });
    });
});

// Output:

// Get user from the database.
// Get services of john from the API.
// Calculate service costs of Email,VPN,CDN.
// The service cost is 300

const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()

const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()