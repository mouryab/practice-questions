let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };

function greetingCall(text) {
    console.log(`${text} ${this.name}`);
}

greetingCall.call(customer1, 'Hello'); // Hello Leo
greetingCall.call(customer2, 'Hello'); // Hello Nat
 
let customer3 = { name: 'Leo', email: 'leo@gmail.com' };
let customer4 = { name: 'Nat', email: 'nat@hotmail.com' };
function greetingApply(text, text2) {
   console.log(`${text} ${this.name}, ${text2}`);
}
greetingApply.apply(customer3, ['Hello', 'How are you?']); // Hello Leo, How are you?
greetingApply.apply(customer4, ['Hello', 'How are you?']); //  Hello Natm How are you?

let customer5 = { name: 'Leo', email: 'leo@gmail.com' };
let customer6 = { name: 'Nat', email: 'nat@hotmail.com' };
function greetingBind(text) {
   console.log(`${text} ${this.name}`);
}

let helloLeo = greetingBind.bind(customer5);
let helloNat = greetingBind.bind(customer6);
console.log(helloLeo); // function
console.log(helloNat); // function
helloLeo('Hello'); // Hello Leo
helloNat('Hello'); // Hello Nat